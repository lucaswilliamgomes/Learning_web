const precoFormatado = {
    _preco: 0,

    get preco() {return this._preco = 'R$'.concat(this._preco)},

    get valor () { return this.valor},

    set valor (valor) {this._preco = valor}
}

precoFormatado.valor = 100
console.log(precoFormatado.preco);
precoFormatado.valor = 178
console.log(precoFormatado.preco);
