function divisaoTotal (divisor, dividendo){
    inteiro = Math.floor(divisor/dividendo)
    resto = divisor - (dividendo * inteiro)
    console.log (`O resultado da divisao é ${inteiro}`)
    console.log (`O resto da divisao é ${resto}`)
}

divisaoTotal(90, 30)
divisaoTotal(9, 2)