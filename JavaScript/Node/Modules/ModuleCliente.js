const ModuleA = require('./ModuleA') // automaticamente ele executa o modulo que está sendo requerido 
const ModuleB = require('./ModuleB')

console.log(ModuleA)
console.log(ModuleB)

console.log(ModuleA.Hello)
console.log(ModuleB.Hi)