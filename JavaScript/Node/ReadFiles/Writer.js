const fs = require('fs')

const object = {
    name: 'Galaxy s8',
    Memory: 64,
    ram: 4,
    valor: 1000
}

fs.writeFile(__dirname + '/fileWriter.json', JSON.stringify(object), error => {
    console.log(error || 'Sucess')
})