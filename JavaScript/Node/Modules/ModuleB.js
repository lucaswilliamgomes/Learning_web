
const saludation = {
    day : 'Hello, Good Morning',
    nigth: 'Hello, Good nigth'
}

console.log(exports === this)
exports.Hi = 'Hi guys' // Estou adicionando uma variavel Hi no this do modulo
//module.exports = saludation   // Caso eu add esse codigo, eu vou estar substuindo o objeto this por um objeto que so contenha outro objeto chamado saludation 
