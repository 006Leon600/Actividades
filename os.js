
const os = require('os');

console.log(Object.keys(os));
console.log(os.machine());
console.log(os.arch());
console.log(os.version());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.type());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.setPriority());
console.log(os.getPriority());
console.log(os.release());
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
let mapIdUsere = os.cpus().slice(0,1).map((registro)=>registro)
console.log(mapIdUsere);
console.log(os.availableParallelism());
console.log(os.tmpdir());