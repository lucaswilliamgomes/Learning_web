// ler um arquivo txt usando promises 

const fs = require ('fs')
const { toString, toArray } = require('lodash')

const dir = __dirname + '/dados.txt'

function reader (path) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(path, (error, data) => {
                if (error === null) {
                    console.log('Não foi encontrado erros na leitura')
                    resolve(data)
                } else {
                    console.log('Não foi possivel ler o arquivo')
                }   
            })
        } catch (e) {
            reject (e)
        }
    })
}

reader(dir).then(dados => toString(dados)).then(console.log)
