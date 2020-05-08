import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import iam = require('@aws-cdk/aws-iam');
import ssm = require('@aws-cdk/aws-ssm');
import customResource = require('@aws-cdk/custom-resources');
import {Bucket} from '@aws-cdk/aws-s3';
import {BucketDeployment, CacheControl, Source} from '@aws-cdk/aws-s3-deployment';
import {CloudFrontWebDistribution, LambdaEdgeEventType} from '@aws-cdk/aws-cloudfront'
import {Duration} from "@aws-cdk/core";
import {AwsCustomResourcePolicy, PhysicalResourceId} from "@aws-cdk/custom-resources";

const sha256 = require('sha256-file');


export class StaticWebsiteStack extends cdk.Stack {

  constructor(scope: cdk.App, id: string, env: cdk.Environment, config: IStaticWebsiteProps) {
    super(scope, id, {env});

    const sourceBucket = new Bucket(this, `S3BucketFor${config.websiteName}`, {
      websiteIndexDocument: config.indexDocument,
      publicReadAccess: true,
    });

    const compressionRouterArn = CloudFrontCompressionRouterFunctionsStack.getLatestVersion(this)
    const compressionRouter = lambda.Version.fromVersionArn(
      this, 'cf-s3-compression-router-version-ref', compressionRouterArn
    )

    const cfDistribution = new CloudFrontWebDistribution(this, `CloudfrontFor${config.websiteName}`, {
      comment: id,
      originConfigs: [{
        s3OriginSource: {s3BucketSource: sourceBucket},
        behaviors: [{
          isDefaultBehavior: true,
          forwardedValues: {headers: ['Accept-Encoding'], queryString: false},
          minTtl: Duration.days(30),
          defaultTtl: Duration.days(30),
          lambdaFunctionAssociations: [
            {eventType: LambdaEdgeEventType.ORIGIN_REQUEST, lambdaFunction: compressionRouter}
          ]
        }],
      }],
    });

    new BucketDeployment(this, `Deploy${config.websiteName}`, {
      sources: [Source.asset(config.localDistPath)],
      destinationBucket: sourceBucket,
      cacheControl: [CacheControl.maxAge(Duration.days(365))],
      distribution: cfDistribution,
    })
  }
}

// This extra beautiful class is required to solve cross-stack reference challenge.
// All Lambda edge functions should be deployed to `us-east-1` region, but CF can be deployed to any region.
// So, we create lambda, save it's arn into ssm store, and extract it using AwsCustomResource during CF deployment.
export class CloudFrontCompressionRouterFunctionsStack extends cdk.Stack {

  private static SSM_KEY_FOR_VERSION_ARN: string = '/compression-router-version-arn';

  constructor(scope: cdk.App) {
    super(scope, 'cf-compression-router-funcs', {env: {region: 'us-east-1'}});

    const routerLambda = new lambda.Function(this, 'cf-s3-compression-router', {
      code: new lambda.AssetCode('src/compression'),
      handler: 'router.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      role: new iam.Role(this, 'AWSEdgeLambdaBasicExecutionRole', {
        assumedBy: new iam.CompositePrincipal(
          new iam.ServicePrincipal('lambda.amazonaws.com'),
          new iam.ServicePrincipal('edgelambda.amazonaws.com'),
        ),
        managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')]
      })
    });

    const fileHash = CloudFrontCompressionRouterFunctionsStack.routerFileSha256()
    const routerLambdaVersion = new lambda.Version(this, `compression-router-version-${fileHash}`, {
      lambda: routerLambda,
    });

    new ssm.StringParameter(this, "compression-router-version-arn", {
      parameterName: CloudFrontCompressionRouterFunctionsStack.SSM_KEY_FOR_VERSION_ARN,
      stringValue: `${routerLambda.functionArn}:${routerLambdaVersion.version}`
    })
  }

  static routerFileSha256() {
    return sha256('./src/compression/router.js')
  }

  static getLatestVersion(scope: cdk.Stack) {
    const fileHash = CloudFrontCompressionRouterFunctionsStack.routerFileSha256()
    return new customResource.AwsCustomResource(
      scope, "GetParameter",
      {
        policy: AwsCustomResourcePolicy.fromSdkCalls({resources: AwsCustomResourcePolicy.ANY_RESOURCE}),
        onUpdate: {
          // will also be called for a CREATE event
          service: "SSM",
          action: "getParameter",
          parameters: {Name: CloudFrontCompressionRouterFunctionsStack.SSM_KEY_FOR_VERSION_ARN},
          region: "us-east-1",
          // Update physical id to always fetch the latest version
          physicalResourceId: PhysicalResourceId.of(`get-router-version-${fileHash}`),
        }
      }
    ).getResponseField('Parameter.Value')
  }
}

export interface IStaticWebsiteProps {
  websiteName: string;
  localDistPath: string;
  indexDocument: string;
  certificateArn?: string;
  domainNames?: Array<string>;
}