pessoa = {
    nome : 'Lucas',
    idade : 18,
    cidade : 'Barras',
    mãe : 'Linalva'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'status', {
    enumerable : false,
    writable : false,
    value: 'Feliz'
})

console.log(pessoa.status)
console.log(Object.keys(pessoa)) // Não mostra o status pois eu n deixei enumeravel


// assign

const dest = {a : 1}
const obj1 = {b : 2}
const obj2 = {c : 3, a : 4}

const obj = Object.assign(dest, obj1, obj2)

console.log(obj)

Object.freeze(obj) // Congela o obj (n podera ser alterado)
obj.c = 90
console.log(obj)
