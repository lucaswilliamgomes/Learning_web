
function RandomNumbersTime (min, max, time) {
    if (min > max) [max, min] = min, max
    return new Promise((resolve, reject) => {
        setTimeout (() => { 
            const random = parseInt(Math.random() * (max - min + 1) + min)
            resolve (random)
        }, time * 1000)
    })
}

function GenerateRandomNumbers (){
    return Promise.all([
        RandomNumbersTime(0, 10, 1),
        RandomNumbersTime(0, 10, 2),
        RandomNumbersTime(0, 10, 4),
        RandomNumbersTime(0, 10, 3),
        RandomNumbersTime(0, 10, 2),
        RandomNumbersTime(0, 10, 0.5)
    ])
}

console.time('Execution promise')
GenerateRandomNumbers()
    .then(console.log)
    .then(() => console.timeEnd('Execution promise'))