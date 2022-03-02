// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

// Create client outside of handler to reuse
const lambda = new AWS.Lambda()

// Handler
exports.handler = async function (event, context) {
  event.Records.forEach(record => {
    console.log(`received event: ${record.body}`);
  });

  //console.log('## ENVIRONMENT VARIABLES: ' + serialize(process.env));
  //console.log('## CONTEXT: ' + serialize(context));
  //console.log('## EVENT: ' + serialize(event));

  //return getAccountSettings();
};
