// Implementando um ForEach

// Minha implementação 
Object.prototype.forEach2 = function(cbfunction) {
    const tam = this.length

    for (x = 0; x < tam; x++){
        cbfunction(this[x], x, this)
    }
}

const pessoas = ['Lucas', 'Maria', 'Roque', 'Paulo']

pessoas.forEach2(function (nome, indice, pessoas){
    console.log(nome , indice, pessoas)
})

// Caramba, consegui de primeira !!!!!!!
// A implementação do professor foi praticamnete iguai a minha