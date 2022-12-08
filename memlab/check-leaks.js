// run scenario's with memlab
// memlab run --scenario ./memlab-scenarios/scenario-1.js --work-dir ./results
// node ./memlab-scenarios/check-leaks.js
const fs = require('fs');
const {scenario} = require('./scenario-1.js');
const {findLeaks, BrowserInteractionResultReader, takeSnapshots, run} = require('@memlab/api');
const core = require('@actions/core');
const {setOutput} = require("@actions/core");

(async function () {
  let oldLeaksData =null;
  try {
    oldLeaksData = fs.readFileSync('./my-leaks', {encoding:'utf8', flag:'r'})
    console.log('From file ', oldLeaksData);
  } catch(e) {
    console.log('No previous leaks check data.');
  }
  let old_leaks = parseInt(oldLeaksData.trim());
  console.log('From parseInt ', old_leaks);

  const result = await takeSnapshots({scenario});
  const leaks = await findLeaks(result);

  console.log('Number of old leaks', old_leaks.length);
  console.log('Number of leaks found', leaks.length);

  if (old_leaks && old_leaks < leaks.length) {
    // throw new Error('Leaks increase !!! Regression!!');
    core.setFailed(`Leaks increase !!! Regression!!: ${leaks.length}`);
  } else {
    // console.log('Number of leaks did not increased.');
    // throw new Error('Leaks is not increased !!! ');
    core.setOutput(`Leaks number is not increased. Wohoo!: ${leaks.length}`);
  }

  fs.writeFileSync('./memlab/my-leaks', leaks.length.toString(), err => {
    if (err) {
      console.error(err);
    }
  });
})();

