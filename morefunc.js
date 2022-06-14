const os = require('os')


//about current user
const user=os.userInfo()

//system uptime
const sysver = os.version()
const sysupT = os.uptime()
const mynetInt = os.networkInterfaces()

console.log("Computer User Here:", user)
console.log("My PC Uptime is:",sysupT, "Seconds")
console.log("My PC Version:", sysver)
console.log("My Network Interface", mynetInt)
console.log("Home Directory of this Work:",os.homedir())
