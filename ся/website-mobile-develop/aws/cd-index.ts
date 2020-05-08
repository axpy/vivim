import cdk = require('@aws-cdk/core');
import {ContinuesDeliveryDevStack} from "./cd/cd-dev";
import {ContinuesDeliveryProdStack} from "./cd/cd-prod";

const region = 'eu-central-1'
const notificationEmails = ['regulawebdevelopers@insspring.com']
const github_repo = {
    owner: 'regulaforensics',
    repository: 'website-mobile'
}

const env = {
    region: region,
};
const app = new cdk.App();

new ContinuesDeliveryDevStack(app, {
    env: env,
    notificationEmails: notificationEmails,
    github: {
        owner: github_repo.owner,
        repository: github_repo.repository,
        branch: 'develop'
    }
})

new ContinuesDeliveryProdStack(app, {
    env: env,
    notificationEmails: notificationEmails,
    github: {
        owner: github_repo.owner,
        repository: github_repo.repository,
        branch: 'master'
    }
})

app.synth();
