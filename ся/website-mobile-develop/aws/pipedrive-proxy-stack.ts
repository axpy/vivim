import apigateway = require('@aws-cdk/aws-apigateway');
import lambda = require('@aws-cdk/aws-lambda');
import cdk = require('@aws-cdk/core');
import ssm = require('@aws-cdk/aws-ssm');

export class PipedriveApiProxyStack extends cdk.Stack {
  constructor(app: cdk.App, env: cdk.Environment) {
    super(app, 'PipedriveApiProxyStack', {env});

    const apiTokenParam = new ssm.StringParameter(this, "pipedrive-api-token", {
      parameterName: '/pipedrive/api/token',
      stringValue: `replace_this_value_in_web_console`
    })

    const testApiTokenParam = new ssm.StringParameter(this, "pipedrive-test-api-token", {
      parameterName: '/pipedrive/api/test-token',
      stringValue: `replace_this_value_in_web_console`
    })

    const createDealLambda = new lambda.Function(this, 'pipedriveProxy', {
      code: new lambda.AssetCode('src/pipedrive'),
      handler: 'pipedrive-proxy.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      memorySize: 256
    });
    apiTokenParam.grantRead(createDealLambda)
    testApiTokenParam.grantRead(createDealLambda)

    const api = new apigateway.RestApi(this, 'pipedriveProxyApi', {
      restApiName: 'Pipedrive Proxy'
    });

    const items = api.root.addResource('create-deal');
    const createDealLambdaIntegration = new apigateway.LambdaIntegration(createDealLambda);
    items.addMethod('POST', createDealLambdaIntegration);
    addCorsOptions(items)
  }
}

// todo move cors options to config and pass it here via constructor
export function addCorsOptions(apiResource: apigateway.IResource) {
  apiResource.addMethod('OPTIONS', new apigateway.MockIntegration({
    integrationResponses: [{
      statusCode: '200',
      responseParameters: {
        'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
        'method.response.header.Access-Control-Allow-Origin': "'*'",
        'method.response.header.Access-Control-Allow-Credentials': "'false'",
        'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
      },
    }],
    passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
    requestTemplates: {
      "application/json": "{\"statusCode\": 200}"
    },
  }), {
    methodResponses: [{
      statusCode: '200',
      responseParameters: {
        'method.response.header.Access-Control-Allow-Headers': true,
        'method.response.header.Access-Control-Allow-Methods': true,
        'method.response.header.Access-Control-Allow-Credentials': true,
        'method.response.header.Access-Control-Allow-Origin': true,
      },
    }]
  })
}