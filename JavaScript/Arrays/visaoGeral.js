// Um array é um objeto

console.log(typeof new Array, typeof [], typeof Array )

let aprovados = new Array ('Lucas', 'Maria', 'Roque')

aprovados = ['Lucas', 'Maria', 'Roque']

// In Js, if you try access an element that does not exist, will return undefined
console.log(aprovados[0], aprovados[2], aprovados[3]) 
aprovados.push ('Paulo') // Add new element

aprovados.sort() // Ordena o array 
console.log(aprovados)

aprovados.splice(1, 2, 'Helcio', 'Gilmar') //Ele vai iniciar do elemento 1, vai apagar ate o elemento 2, e mais inserir helcio e gilmar a partir do [1]

console.log(aprovados)

