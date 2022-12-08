// run scenario's with memlab
// memlab run --scenario ./memlab-scenarios/scenario-1.js --work-dir ./results
// node ./memlab-scenarios/check-leaks.js
const fs = require('fs');
const {scenario} = require('./scenario-1.js');
const {findLeaks, BrowserInteractionResultReader, takeSnapshots, run} = require('@memlab/api');

(async function () {
  let oldLeaksData =null;
  try {
    oldLeaksData = fs.readFileSync('./my-leaks')
  } catch(e) {}
  const old_leaks = parseInt(oldLeaksData);

  const result = await takeSnapshots({scenario});
  const leaks = await findLeaks(result);

  console.log('Number of old leaks', old_leaks.length);
  console.log('Number of leaks found', leaks.length);

  if (old_leaks && old_leaks < leaks.length) {
    throw new Error('Leaks increase !!! Regression!!');
  } else {
    console.log('Number of leaks did not increased.');
    throw new Error('Leaks is not increased !!! ');
  }

  fs.writeFileSync('./memlab/my-leaks', leaks.length.toString(), err => {
    if (err) {
      console.error(err);
    }
  });
})();

