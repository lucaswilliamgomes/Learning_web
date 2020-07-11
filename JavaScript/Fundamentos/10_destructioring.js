// Objects 
const Pessoa = {
    nome: 'Lucas',
    endereço: {
        cidade: 'Barras',
        estado: 'Piaui',
    }
}

const { nome: name } = Pessoa
console.log(name)

const { endereço: { cidade: morada, estado: uf } } = Pessoa
console.log(morada, uf)

// Arrays

const [a, b, , d] = [1, 2, 3, [4, 5, 6]]
console.log(a, b, d)

// Functions , objects

function rand({ min = 0, max = 100 }) {
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 10, max: 20 }
console.log(rand(obj))

// Functions , arrays

function randint([ min = 0, max = 100 ]) {
    if (min > max) [min, max] = [max, min]
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const array = [10, 2]
console.log(randint(array))
