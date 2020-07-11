function calculadora (a, sinal, b){
    switch (sinal) {
        case '+':
            return a + b 
            break;
        case '-':
            return a - b 
            break;   
        case '*':
            return a * b 
            break; 
        case '/':
            return a / b 
            break;    
        default:
            return `Só é permitido ('+', '-', '*', '/') como sinais de operações`
            break;
    }
}

console.log(calculadora(3,'+', 4));
console.log(calculadora(3,'-', 4));
console.log(calculadora(3,'*', 4));
console.log(calculadora(3,'/', 4));
console.log(calculadora(3,'_', 4));