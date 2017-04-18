var os = require("os");



// OS type
 console.log('type : ' + os.type());



// OS platform
 console.log('platform : ' + os.platform());

// OS Architecute
 console.log('architecture : '+os.arch());

// OS uptime
 console.log('uptime : '+os.uptime());

// Total system memory
 console.log('total memory : ' + os.totalmem() + " bytes.");


// // Total free memory
 console.log('free memory : ' + os.freemem() + " bytes.");
