
console.log(a) // mesmo n declarada a variavel, n ira haver um erro 
var a = 10
console.log(a)
console.log()

/* var a 
   console.log(a)      Isso é o que acontece na verdade 
   a = 10
   console.log() */

const obj = {}
obj.nome = 'Lucas'
obj['nome'] = 'Maria'
console.log(obj['nome'])