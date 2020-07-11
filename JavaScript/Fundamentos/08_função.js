
// Sem retorno
function imprimirSoma (a, b){
    console.log(`A soma de ${a} e ${b} é igual a ${a+b}`)
}

imprimirSoma(2, 5)
imprimirSoma(2) // O segundo paramentro será undefined
imprimirSoma(10, 1, 81, 910) // Apenas o primeiro e o segundo paramentro será usado

// Com retorno
function soma (a, b = 0){
    return a + b
}

const soma1 = soma(2, 8)
console.log (soma1)

// Funções anonimas 
const soma2 = function (a , b = 0){
    console.log(`A soma de ${a} e ${b} é igual a ${a+b}`)
} 

soma2(10, 90)

// Função arrow 
const soma3 = (a, b = 0) => {
    console.log(`A soma de ${a} e ${b} é igual a ${a+b}`)
}

soma3(60, 9)

// Retorno implicito 

soma4 = (a, b = 0) => a + b

console.log(`Soma = ${soma4(40, 120)}`)