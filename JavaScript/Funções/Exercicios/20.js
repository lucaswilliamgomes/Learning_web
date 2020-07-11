
function cedulas (valor){

    let c100 = 0
    let c50 = 0
    let c10 = 0
    let c5 = 0
    let c1 = 0
    if (valor > 100){
        c100 = Math.floor(valor / 100)
        valor = valor - (c100 * 100)
    } if (valor > 50){
        c50 = Math.floor(valor / 50)
        valor = valor - (c50 * 50) 
    } if (valor > 10){
        c10 = Math.floor(valor / 10)
        valor = valor - (c10 * 10) 
    } if (valor > 5){
        c5 = Math.floor(valor / 5)
        valor = valor - (c5 * 5) 
    } if (valor > 1){
        c1 = Math.floor(valor / 1)
        valor = valor - (c1 * 1) 
    }
    console.log(`cedular de 100 = ${c100}
cedular de 50 = ${c50}
cedular de 10 = ${c10}
cedular de 5 = ${c5}
cedular de 1 = ${c1}`)
}

cedulas(59)