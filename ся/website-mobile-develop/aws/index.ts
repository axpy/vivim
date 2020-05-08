import cdk = require('@aws-cdk/core');
import {CloudFrontCompressionRouterFunctionsStack, StaticWebsiteStack} from "./static-website-stack";
import {PipedriveApiProxyStack} from "./pipedrive-proxy-stack";
import {Stage, STAGE_KEY} from "./stage"

const region = 'eu-central-1'

const stage = process.env[STAGE_KEY] || Stage.DEV
if (!(<any>Object).values(Stage).includes(stage)) {
  console.log(`Wrong stage key. Should be one of ${Object.values(Stage)}.Got ${stage}`)
  process.exit(1)
}

const env = {
  region: region,
};
const app = new cdk.App();

new PipedriveApiProxyStack(app, env);
const compressionRouterStack = new CloudFrontCompressionRouterFunctionsStack(app)
const websiteStack = new StaticWebsiteStack(app, `SmmSite-${stage}`, env, {
  websiteName: 'SMM',
  indexDocument: 'index.html',
  localDistPath: '../client/dist'
});

websiteStack.addDependency(compressionRouterStack)
app.synth();
