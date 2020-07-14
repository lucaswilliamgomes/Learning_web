const Ferrari = {
    modelo : 'F40',
    VelMax : 320
}

const Volvo = {
    modelo : 'k67',
    VelMax : 200
}



console.log(Ferrari.__proto__)
console.log(Ferrari.__proto__ === Object.prototype)

console.log(Volvo.__proto__)
console.log(Volvo.__proto__ === Object.prototype)