function tipoTriangulo (a, b, c){
    validator = (function(a, b, c){
        if (a+b < c) return false
        else if (b+c < a) return false
        else if (a+c < b) return false
        else return true
    })(a, b, c)

    if (!!validator === false) {
        console.log(`O triangulo ${a}, ${b}, ${c} não forma um triangulo valido`)
    } else {
        if (a === b && b === c){
            console.log(`O triangulo ${a}, ${b}, ${c} forma um triangulo equilatero`)
        } else if (a !== b && b!== c && a !== c){
            console.log(`O triangulo ${a}, ${b}, ${c} forma um triangulo escaleno`)
        } else {
            console.log(`O triangulo ${a}, ${b}, ${c} forma um triangulo Isosceles`)
        }
    }
}

tipoTriangulo (10, 3, 4)
tipoTriangulo (4, 4, 4)
tipoTriangulo (3, 3, 4)
tipoTriangulo (5, 3, 4)

