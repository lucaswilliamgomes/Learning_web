const fs = require('fs')
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require('constants')

const dir = __dirname + '/file.json'

// Sincrona : Espera ler o arquivo para rodar o resto do codigo 
const file = fs.readFileSync(dir, 'utf-8')
console.log(file)

//Assincrono : dar continuidade ao codigo e quando ele terminar de ler o arquivo ele roda a CallBack function
fs.readFile(dir, (error, datafile) => {

    if (error === null) {
        console.log('Não foi encontrado erros na leitura do arquivo')
        const data = JSON.parse(datafile)
        console.log(data)
    } else {
        console.log('Foram encontrados erros na leitura do arquivo')
    }
})

// Leitura de pastas

fs.readdir(__dirname, (error, files) => {
    if (error === null) {
        console.log('Não foi encontrado erros na leitura da pasta')
        console.log(files)
    } else {
        console.log('Foram encontrados erros na leitura da pasta')
    }

})