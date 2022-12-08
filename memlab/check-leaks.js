// run scenario's with memlab
// memlab run --scenario ./memlab-scenarios/scenario-1.js --work-dir ./results
// node ./memlab-scenarios/check-leaks.js

const {scenario} = require('./scenario-1.js');
const {findLeaks, BrowserInteractionResultReader, takeSnapshots, run} = require('@memlab/api');

(async function () {

  const {leaks} = await run({scenario});
  console.log('Number of leaks found', leaks.length);
})();

