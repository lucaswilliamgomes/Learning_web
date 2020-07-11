function GetPreço (){
    return `${this.moeda} ${this.preco - ((this.disconto / 100) * this.preco)}`
}

const Camisa1 = {
    moeda : '$',
    preco : 100,
    disconto : 10
}

const Carro1 = {
    moeda : 'R$',
    preco : 40000,
    disconto : 5
}

const Notebook1 = {
    moeda : 'R$',
    preco : 2000,
    disconto : 8
}

console.log(GetPreço.call(Carro1)); // Call muda o this, e recebe os argumentos necessarios 

console.log(GetPreço.apply(Notebook1)); // Call muda o this, e recebe os argumentos necessarios em forma de Array que pode ser acessado dentro da function por meio de Arguments[index] 

preço_camisa = GetPreço.bind(Camisa1) // Bind muda o this, e retorna uma nova função no qual o this sera o que foi passado
console.log(preço_camisa()); 
