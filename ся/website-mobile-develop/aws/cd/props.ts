import cdk = require('@aws-cdk/core');

export interface GithubProps {
    owner: string
    repository: string
    branch: string
}

export interface PipelineStackProps extends cdk.StackProps {
    notificationEmails: string[]
    github: GithubProps
}
