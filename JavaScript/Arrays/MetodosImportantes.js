const nomes = ['Paulo', 'Roque', 'lucas', 'Maria']

nomes.pop() // Remove o ultimo elemento
console.log(nomes)
nomes.shift() // Remove o primeiro elemento  
console.log(nomes)
nomes.unshift('Helcio') // Add um elemento no primero lugar do array
console.log(nomes)
nomes.splice(2, 0, 'Joaquim', 'Gilmas', 'CarlosJr') // Add as strings a partir do segundo, não deleta nada (0)
console.log(nomes)
const churras = nomes.slice(2, 5) // Cria um novo Array a partir do elemento 2 do array indicado ate o elemento 5
console.log(churras)


