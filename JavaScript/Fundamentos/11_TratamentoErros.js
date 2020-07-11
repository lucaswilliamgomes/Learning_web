function TrataExcecao (erro){
    throw `Houve um erro inesperado durante a execuçaõ do script
    Tipo de erro ( ${erro} )`
}


function Capitalise (obj) {
    let x;
    try {
        obj.name = obj.name.split('')
        obj.name[0] = obj.name[0].toUpperCase()
        for (x = 1; x < obj.name.length; x++){
            if (obj.name[x] === " ") {
                obj.name[x+1] = obj.name[x+1].toUpperCase()
            }
        }
        obj.name = obj.name.join('')
    } catch (erro) {
        TrataExcecao(erro)
    } finally {
        console.log('A execução da function chegou ao fim')
    }
}

const pessoa = {
    nome : 'lucas william gomes do amaral'
}

Capitalise(pessoa)
console.log(pessoa.nome)



