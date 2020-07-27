// Middleware pattern (chain of reponsability)

const step1 = (context, next) => {
    context.step1 = 'step1'
    next ()
}

const step2 = (context, next) => {
    context.step2 = 'step2'
    next ()
}

const step3 = context => context.step3 = 'step3'

const exec = (context, ...steps) => {
    const execStep = indice => {
        steps && indice < steps.length && steps[indice] (context, () => execStep(indice + 1))
    }
    execStep(0)
}

let context = {}
exec (context, step1, step2, step3)
console.log(context)