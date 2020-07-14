
Object.prototype.atrr10 = '10'
const avo = { atrr1: 1 }
const pai = { __proto__: avo, atrr2: 2 }
const filho = { __proto__: pai, atrr3: 3 }

console.log(filho.atrr1, filho.atrr2, filho.atrr3, atrr10);

// Colocando em prática
const Carro = {
    Velocidade: 0,
    VeloMax: 200,
    acelerar(a) {
        if (this.Velocidade + a <= this.VeloMax) {
            this.Velocidade += a
            console.log(`O carro está a ${this.Velocidade} km por hora`)
        } else {
            this.Velocidade = this.VeloMax
            console.log(`O carro está a ${this.Velocidade} km por hora`)
        }
    }
}

const Ferrari = {
    __proto__ : Carro,
    VeloMax : 410
}

const Uno = {
    __proto__ : Carro,
    VeloMax : 240
}

Uno.acelerar(100)
Uno.acelerar(100)
Uno.acelerar(100)
console.log();
Ferrari.acelerar(100)
Ferrari.acelerar(100)
Ferrari.acelerar(100)
Ferrari.acelerar(100)
Ferrari.acelerar(100)


