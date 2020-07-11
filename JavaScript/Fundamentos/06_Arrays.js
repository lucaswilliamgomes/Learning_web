const valores = [5, 10, 8, 9.76, 45, 69]

console.log (valores[0], valores[3])
console.log (valores[10]) // Não está definido, mas não dá erro
valores[10] = 999
console.log (valores)
console.log (valores.length) // tamanho do array
valores.push(null, false, undefined, 'Luquinhas') // add itens no array
valores.pop() // Remove o ultimo elemento do array e retorna ele 
console.log(valores)