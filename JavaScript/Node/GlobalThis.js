console.log(this === global)
console.log(this === module.exports, this === exports)

function logThis (){
    console.log(this === global) // O this dentro de uma função é igual ao objeto global 
    this.nome = 'Lucas' // Má pratica pois vc estava add uma variavel ao objeto global 
}

logThis()
console.log(nome, this.nome)

