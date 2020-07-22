const axios = require('axios')

const FemaleChinese = (func) => func.genero === 'F' && func.pais === 'China'
const ExpensiveSalary = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
    const funcionarios = response.data
    let girlChineseExpensive = funcionarios
    .filter(FemaleChinese)
    .reduce(ExpensiveSalary)
    console.table(girlChineseExpensive)  
})