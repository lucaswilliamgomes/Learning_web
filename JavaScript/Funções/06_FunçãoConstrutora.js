function Pessoa (nome) {
    this.nome = nome
    
    this.apresentar = () => {
        console.log(`Olá, meu nome é ${nome}`);
    }
}

const Lucas = new Pessoa('Lucas')
Lucas.apresentar()
console.log(Lucas.nome);
