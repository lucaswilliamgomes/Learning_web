// Funcão que retorna um objeto
function NewProduct (nome, preco, discontoPor100 = 0){
    return {
        "nome" : nome,
        "preço" : preco - (preco * (discontoPor100/100))
    }
}

Prod1 = NewProduct('Camisa', 50.0, 20)
console.log(Prod1)