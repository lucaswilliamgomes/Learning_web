const father = {
    Name : 'Girleno',
    ColorHair : 'Black'
}

const son = Object.create(father)
son.name = 'Lucas'
console.log(son.name, son.ColorHair)

const son2 = Object.create(father, {
    Name: {value : 'Gyslanny', writable : false, enumerable : true} //Propriedades para o atributo name 
})

for (let key in son2){
    son2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`${key} herdado`)
}
