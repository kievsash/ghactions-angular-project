const fs = require('fs');


const old_leaks = parseInt(fs.readFileSync('./my-leaks'));
const current_leaks = parseInt(fs.readFileSync('./my-leaks'));
