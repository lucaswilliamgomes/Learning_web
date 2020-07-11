function soma() {
    sum = 0
    for (valor in arguments) {
        sum += arguments[valor]
    }
    return sum
}

console.log(soma(1, 10, 20, 66))