// run scenario's with memlab
// memlab run --scenario ./memlab-scenarios/transfer-and-pay.js --work-dir ./memlab-scenarios/results
// node ./memlab-scenarios/ci/check-leaks.js

const {findLeaks, BrowserInteractionResultReader} = require('@memlab/api');

(async function () {
    const reader = BrowserInteractionResultReader.from(__dirname+'/../results');
    const leaks = await findLeaks(reader).then(result => {
        console.log('Number of leaks found', result.length);
    });
})();
