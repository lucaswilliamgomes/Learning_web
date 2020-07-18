const Produtos = [
    {Nome: 'MacBook', Preço: 20000, Fragil: true},
    {Nome: 'Iphone XI', Preço: 8000, Fragil: true},
    {Nome: 'Case', Preço: 200, Fragil: false},
    {Nome: 'Cable', Preço: 100, Fragil: false},
    {Nome: 'AirMax', Preço: 4000, Fragil: false},
]
let aviao = Produtos.filter((element) => {
    if (element.Preço > 1000 && element.Fragil){
        return true
    } else return false
})
console.log(aviao)

// De maneira mais limpa e implementando um filter manualmente 
Array.prototype.filter2 = function (CallBack){
    let newarray = []
    for (let x = 0; x < this.length; x++){
        if (CallBack(this[x])){
            newarray.push(this[x])
        }
    }
    return newarray
}

const caro = produto => produto.Preço > 1000 
const fragil = produto => produto.Fragil
let aviao2 = Produtos.filter2(caro).filter2(fragil)
console.log(aviao2)