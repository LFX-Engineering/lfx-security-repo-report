// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

//const AWSXRay = require('aws-xray-sdk-core');
//const AWS = AWSXRay.captureAWS(require('aws-sdk'));

// Create client outside of handler to reuse
//const lambda = new AWS.Lambda()

// Handler
exports.handler = async function (event, context) {
  // TODO - DAD - validate environment, check for required environment variables
  event.Records.forEach(record => {
    console.log(`received event: ${record.body}`);
    // TODO - DAD - validate request/body

    const spawnSync = require('child_process').spawnSync;
    // TODO - DAD - figure out the proper flag for generating the report in JSON
    // TODO - DAD - how to I pass command line argument to fetch information from remote repo URL?
    const process = spawnSync('node_modules/repo-report/bin/run', ['--json'], {
      stdio: 'pipe',
      stderr: 'pipe'
    });
    console.log(process.status);
    console.log(JSON.stringify(process.stdout.toString()));
    // TODO - DAD - handle/log tool errors
    // TODO - DAD - capture and validate results, forward to LFX Security API for datalake ingest
  });
};
