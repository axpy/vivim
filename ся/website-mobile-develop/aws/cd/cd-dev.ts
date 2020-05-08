import cdk = require('@aws-cdk/core');
import sns = require('@aws-cdk/aws-sns');
import iam = require('@aws-cdk/aws-iam');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import events = require('@aws-cdk/aws-events');
import {Artifact, Pipeline} from '@aws-cdk/aws-codepipeline';
import {CodeBuildAction, GitHubSourceAction, GitHubTrigger} from '@aws-cdk/aws-codepipeline-actions'
import {PipelineProject, BuildSpec} from '@aws-cdk/aws-codebuild'
import {SnsTopic} from "@aws-cdk/aws-events-targets";
import {PipelineStackProps} from "./props";
import {Stage, STAGE_KEY} from '../stage'


export class ContinuesDeliveryDevStack extends cdk.Stack {
    constructor(app: cdk.App, props: PipelineStackProps) {
        super(app, 'ContinuesDeliveryDevStack', props);

        // AWS CodePipeline pipeline
        const pipeline = new Pipeline(this, 'ContinuesDeliveryDevPipeline', {
            pipelineName: 'ContinuesDeliveryDevPipeline',
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
            projectName: 'UpdateContinuesDeliveryPipelineDev',
            buildSpec: BuildSpec.fromSourceFilename('./aws/cd/update-cd-buildspec.yml'),
            environmentVariables: {
                CD_STACK_NAME: {value: 'ContinuesDeliveryDevStack'}
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

        // Third pipeline step - update website on dev environment
        const updateDevWebsiteProject = new PipelineProject(this, 'UpdateWebsiteContent', {
            projectName: 'UpdateDevWebsiteContent',
            buildSpec: BuildSpec.fromSourceFilename('./aws/cd/update-content-buildspec.yml'),
            environmentVariables: {
                SMM_SITE_S3_BUCKET: {value: 'smmsite-dev-s3bucketforsmm309efc65-1mh3e5fzuj1x1'}
            },
        });
        updateDevWebsiteProject.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'));

        pipeline.addStage({
            stageName: 'UpdateDevWebsiteContent',
            actions: [
                new CodeBuildAction({
                    actionName: 'UpdateDevWebsiteContent',
                    project: updateDevWebsiteProject,
                    input: gitSources,
                    environmentVariables: {
                        [STAGE_KEY]: {value: Stage.DEV}
                    }
                }),
            ],
        })

        // Add notification for failing builds
        const notificationTopic = new sns.Topic(this, 'ContinuesDeliveryFailsTopic', {
            displayName: 'ContinuesDelivery Fails'
        });
        for (const email of props.notificationEmails) {
            notificationTopic.addSubscription(new subs.EmailSubscription(email))
        }
        const eventPipeline = events.EventField.fromPath('$.detail.pipeline');
        const eventTime = events.EventField.time
        pipeline.onStateChange('cd-fails-trigger', {
            target: new SnsTopic(notificationTopic, {
                message: events.RuleTargetInput.fromText(
                    `Pipeline ${eventPipeline} FAILED on merge to ${props.github.branch} at ${eventTime}`
                ),
            }),
            eventPattern: {source: ['aws.codepipeline'], detail: {state: ['FAILED']}}
        })

    }
}