function fatorial (num){
    let resul = 1
    for ( ; num > 1 ; num --) {
        resul *= num 
    }
    console.log(resul)
}

fatorial(5)