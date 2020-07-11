let Univerdidade = "UFPII"
let alunos = 'Lucas, Maria, Roque, Paulo'

console.log(Univerdidade.charAt(2)) // Returna o caractere do index 2
console.log(Univerdidade.charAt(10)) // Não gera um erro
console.log(Univerdidade.indexOf("P")) // Returna o index do caractere
console.log(Univerdidade.substring(1, 3)) // retorna a string do index 1 até o 3
console.log("A Universidade ".concat(Univerdidade).concat(" é a melhor do Piauí"))
console.log("A Universidade " + (Univerdidade) + (" é a melhor do Piauí"))
console.log(Univerdidade.replace("I" , 1)) // Troca o I por 1
console.log(Univerdidade.replace(/I/g , 1)) // Troca todos os I por 1

console.log(alunos.split(',')) // Transforme em um array separado no argumento mandado
console.log()

// Templates 

const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'
console.log(concatenação)

const template = `      Olá 
    ${nome} !`
console.log(template)

const up = texto => texto.toUpperCase() //Uma função

console.log(`Eiiii... ${up("Cuidado")} !`) //Templates aceitam funções 