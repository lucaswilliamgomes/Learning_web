// Function imediatamente auto xecutada


(function (){
    let nome = 'lucas';
    console.log('Fora do escopo global');
    console.log('Será executada assim que criada');
})() 

console.log(nome) //  Gerá um erro
