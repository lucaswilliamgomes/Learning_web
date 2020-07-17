// Implementar o map manualmente 
Array.prototype.map2 = function (CallBack) {
    const newarray = []
    for (let x = 0; x < this.length; x++){
        newarray.push (CallBack(this[x], x, globalThis))
    }
    return newarray
}

const carrinho = [
    '{"nome" : "Borracha", "Preço" : 1.99}',
    '{"nome" : "Lapis", "Preço" : 0.99}',
    '{"nome" : "Caderno", "Preço" : 24.99}',
    '{"nome" : "Caneta", "Preço" : 1.99}'
]

let compras = carrinho.map2((element) => JSON.parse(element))
let valoresCompra = []
valoresCompra = compras.map2((element) => element.Preço)

console.log (valoresCompra)