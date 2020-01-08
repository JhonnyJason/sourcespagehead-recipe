
const pathModule = require("path")
const fs = require("fs")

const packagePath = pathModule.resolve(process.cwd(), "ressources", "package.json")
const package = require(packagePath)
const thingyPath = pathModule.resolve(process.cwd(), "..")
const name = pathModule.basename(thingyPath)
package.name = name
package.bin = {}
package.bin[name] = "./index.js"
packageString = JSON.stringify(package, null, 2)
fs.writeFileSync(packagePath, packageString)
console.log("individualized clisources!") 