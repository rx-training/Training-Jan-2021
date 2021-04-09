const os = require('os');

var totalMemory = os.totalmem();
var freeMemoery = os.freemem();

console.log(`Total Memory is : ${totalMemory}\n Free Memory is : ${freeMemoery}`);