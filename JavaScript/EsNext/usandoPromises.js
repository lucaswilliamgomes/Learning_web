// http://files.cod3r.com.br/curso-js/turmaA.json
// http://files.cod3r.com.br/curso-js/turmaB.json
// http://files.cod3r.com.br/curso-js/turmaC.json

// Com Promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {

        http.get (url, res => {
            let resultado = ''
            res.on ('data', dados => {
                resultado += dados
            })
        
            res.on ('end', () => {
                try {
                    resolve (JSON.parse(resultado))
                } catch (e) {
                    reject (e)
                }
            })
        })
    })
}

let nomes = []

getTurma('A').then(alunos => {nomes = nomes.concat(alunos.map(aluno => `A : ${aluno.nome}`))})
getTurma('B').then(alunos => {nomes = nomes.concat(alunos.map(aluno => `B : ${aluno.nome}`))})
getTurma('C').then(alunos => {nomes = nomes.concat(alunos.map(aluno => `C : ${aluno.nome}`))
                                                console.log (nomes)})


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(aluno => [].concat(aluno.map (aluno => aluno.nome)))
    .then(nome => console.log(nome))

// Caso haja problema na promisse (O tratamento do erro seria mais ou menos assim) 
getTurma('D').catch (e => {console.log(e.message)})
