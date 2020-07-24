console.log(exports === this)
console.log(exports === module.exports)

this.a = 1
exports.b = 3
module.exports.c = 3

console.log(module.exports)

exports = null

console.log(module.exports, this, exports) // exports é uma variavel que aponta pro mesmo espaço da memoria que o module.exports e o this, portanto n trasnforma o valor das outras

// Sempre o que será exportado será o que está em module.exports
