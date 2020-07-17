const aprovados = ['Lucas', 'Roque', ['Med', 'Ciencia da Computação'], 'Maria']

aprovados.forEach(function (nome, index){
    console.log(`${index + 1}) ${nome}`)
})

console.log()
aprovados.forEach((nome, index, array) => console.log(`${index + 1}) ${nome} \n ${array}`))