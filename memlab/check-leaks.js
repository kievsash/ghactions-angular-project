// run scenario's with memlab
// memlab run --scenario ./memlab-scenarios/scenario-1.js --work-dir ./results
// node ./memlab-scenarios/check-leaks.js
const fs = require('fs');
const {scenario} = require('./scenario-1.js');
const {findLeaks, BrowserInteractionResultReader, takeSnapshots, run} = require('@memlab/api');

(async function () {

  const {leaks} = await run({scenario});
  // console.log('Number of leaks found', leaks.length);

  fs.writeFile('./leaks-'+Date.now(), leaks.length.toString(), err => {
    if (err) {
      console.error(err);
    }
  });
})();

