//  O this é o termo igual o self do python 

const pessoa = {
    frase : 'Olá bom dia, tudo bem?',
    falar () {
        console.log(`${this.frase}`)
        console.log(this === global)
        console.log(this === pessoa)
    }

}


const saudação = pessoa.falar
saudação() // o this nesse contexto será o escopo do padrão do modulo 


const falarPessoa = pessoa.falar.bind(pessoa) 
falarPessoa() // Agr o this dessa function será o do object pessoa, graças a function bind


