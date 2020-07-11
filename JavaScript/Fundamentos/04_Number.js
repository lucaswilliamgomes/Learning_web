const peso1 = 1.2
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1)) // False
console.log(Number.isInteger(peso2)) // True

const media = (peso1 + peso2) / 2

console.log(media.toFixed(3))
console.log(media.toString(2)) // converte em binário
console.log(typeof Number) // Function

// Alguns cuidados

console.log (7 / 0) // Infinity
console.log ("10" / 2) // 5
console.log('3' + 2) // vai concatenar
console.log('3' - 2) // vai diminuir
console.log ("show" * 2) // "show" is not a Number (NaN)
console.log (0.2 + 0.7) // 0.89999999 (Imprecision)
// console.log (10.toFixed(2)) Errado
console.log((10).toFixed(2))

// Math (como se fosse a lib do python mas no JS é um objeto)

const raio = 10
const area = Math.PI * Math.pow(raio, 2)
console.log("A área da circunferência é", area.toFixed(2))
console.log(typeof Math.pow) // function


