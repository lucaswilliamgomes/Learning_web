// O método reduce executa uma função (fornecida por você) para cada elemento do array, resultando num único valor de retorno.


const Produtos = [
    {Nome: 'MacBook', Preço: 20000, Fragil: true},
    {Nome: 'Iphone XI', Preço: 8000, Fragil: true},
    {Nome: 'Case', Preço: 200, Fragil: false},
    {Nome: 'Cable', Preço: 100, Fragil: false},
    {Nome: 'AirMax', Preço: 4000, Fragil: false},
]

let compra = Produtos.map(element => element.Preço)
console.log(compra)
let Total = compra.reduce((acumulador, atual) => acumulador + atual)
console.log(Total)

console.log('Desafio 1: todos os produtos são frageis?')

let resposta = Produtos.map(element => element.Fragil).reduce((todos, atual) => todos && atual) 
console.log(resposta)

console.log('Desafio 1: Algum produto é frageis?')
resposta = Produtos.map(element => element.Fragil).reduce((todos, atual) => todos || atual) 
console.log(resposta)
