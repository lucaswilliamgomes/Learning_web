/*  function soma(a, b, c, d) {  // antigamente 

        a = a || 0
        b = b !== undefined ? b : 0
        c = 2 in arguments ? c : 0
        d = isNaN(d) ? 0 : d

        return a + b + c + d
    }   
*/ 


// Atualmete é igual em python

function soma (a = 0, b = 0, c = 0, d = 0) {
    return a + b + c +d
}

console.log(soma(10, 20, 30, 40))