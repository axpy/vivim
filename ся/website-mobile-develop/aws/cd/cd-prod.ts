import cdk = require('@aws-cdk/core');
import sns = require('@aws-cdk/aws-sns');
import iam = require('@aws-cdk/aws-iam');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import {Artifact, Pipeline} from '@aws-cdk/aws-codepipeline';
import {
    CodeBuildAction,
    GitHubSourceAction,
    GitHubTrigger,
    ManualApprovalAction
} from '@aws-cdk/aws-codepipeline-actions'
import {PipelineProject, BuildSpec} from '@aws-cdk/aws-codebuild'
import {SnsTopic} from "@aws-cdk/aws-events-targets";
import {PipelineStackProps} from "./props";
import {Stage, STAGE_KEY} from '../stage'


export class ContinuesDeliveryProdStack extends cdk.Stack {
    constructor(app: cdk.App, props: PipelineStackProps) {
        super(app, 'ContinuesDeliveryProdStack', props);

        // AWS CodePipeline pipeline
        const pipeline = new Pipeline(this, 'ContinuesDeliveryProdPipeline', {
            pipelineName: 'ContinuesDeliveryProdPipeline',
            restartExecutionOnUpdate: true,
        })

        // First pipeline step - download github sources
        const gitSources = new Artifact()
        pipeline.addStage({
            stageName: 'Source',
            actions: [
                new GitHubSourceAction({
                    actionName: 'Checkout',
                    owner: props.github.owner,
                    repo: props.github.repository,
                    branch: props.github.branch,
                    oauthToken: cdk.SecretValue.secretsManager(`github-${props.github.repository}-repo-token`),
                    output: gitSources,
                    trigger: GitHubTrigger.POLL,
                }),
            ],
        })
        // Second pipeline step - update pipeline itself
        const updateCdProject = new PipelineProject(this, 'UpdateContinuesDeliveryPipelineProject', {
            projectName: 'UpdateContinuesDeliveryPipelineProd',
            buildSpec: BuildSpec.fromSourceFilename('./aws/cd/update-cd-buildspec.yml'),
            environmentVariables: {
                CD_STACK_NAME: {value: 'ContinuesDeliveryProdStack'}
            }
        });
        updateCdProject.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));

        pipeline.addStage({
            stageName: 'UpdateContinuesDeliveryPipeline',
            actions: [
                new CodeBuildAction({
                    actionName: 'UpdateContinuesDeliveryPipeline',
                    project: updateCdProject,
                    input: gitSources
                }),
            ],
        })

        // Third pipeline step - update website
        const updateTestWebsiteProject = new PipelineProject(this, 'UpdateTestWebsiteContent', {
            projectName: 'UpdateTestWebsiteContent',
            buildSpec: BuildSpec.fromSourceFilename('./aws/cd/update-content-buildspec.yml'),
            environmentVariables: {
                SMM_SITE_S3_BUCKET: {value: 'smmsite-test-s3bucketforsmm309efc65-1rn3i6v4s8c6r'}
            },
        });
        updateTestWebsiteProject.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));

        pipeline.addStage({
            stageName: 'UpdateTestWebsiteContent',
            actions: [
                new CodeBuildAction({
                    actionName: 'UpdateWebsiteContent',
                    project: updateTestWebsiteProject,
                    input: gitSources,
                    environmentVariables: {
                        [STAGE_KEY]: {value: Stage.TEST}
                    },
                    runOrder: 1
                }),
                new ManualApprovalAction({
                    actionName: 'WaitManualApproval',
                    notifyEmails: props.notificationEmails,
                    externalEntityLink: 'https://d3ism091dph5mh.cloudfront.net',
                    additionalInformation: 'Check test environment',
                    runOrder: 2
                })
            ],
        })

        // Third pipeline step - update website
        const updateProdWebsiteProject = new PipelineProject(this, 'UpdateProdWebsiteContent', {
            projectName: 'UpdateProdWebsiteContent',
            buildSpec: BuildSpec.fromSourceFilename('./aws/cd/update-content-buildspec.yml'),
            environmentVariables: {
                SMM_SITE_S3_BUCKET: {value: 'smmsite-prod-s3bucketforsmm309efc65-bfm0q2g3ifau'}
            },
        });
        updateProdWebsiteProject.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));

        pipeline.addStage({
            stageName: 'UpdateProdWebsiteContent',
            actions: [
                new CodeBuildAction({
                    actionName: 'UpdateWebsiteContent',
                    project: updateProdWebsiteProject,
                    input: gitSources,
                    environmentVariables: {
                        [STAGE_KEY]: {value: Stage.PROD}
                    }
                })
            ],
        })

        // Add notification for failing builds
        const notificationTopic = new sns.Topic(this, 'ContinuesDeliveryFailsTopic', {
            displayName: 'ContinuesDelivery Fails'
        });
        for (const email of props.notificationEmails) {
            notificationTopic.addSubscription(new subs.EmailSubscription(email))
        }
        pipeline.onStateChange('cd-fails-trigger', {
            target: new SnsTopic(notificationTopic),
            eventPattern: {source: ['aws.codepipeline'], detail: {state: ['FAILED']}}
        })
    }
}