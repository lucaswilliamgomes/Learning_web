console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 3, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() { //fazer isso dá muita merda
    return 'Error 404!!!!'
}

console.log('Escola Coder'.reverse())