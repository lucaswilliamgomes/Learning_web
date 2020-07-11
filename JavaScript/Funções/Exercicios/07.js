
function bhaskara (a, b = 0, c = 0){
    const delta = Math.pow (b, 2) - 4 * a * c

    
    if (delta < 0)  return `Delta = ${delta}`
    else {
        x1 = ((-1 * b) + Math.pow (delta, 0.5)) / (2 * a)
        x2 = ((-1 * b) - Math.pow (delta, 0.5)) / (2 * a)
        return [x1 , x2]
    }
}

console.log(bhaskara(2, -3, - 5))
