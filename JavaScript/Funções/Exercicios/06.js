function jurosSimples (init, taxa, tempo){
    taxa = taxa / 100
    const montante = init + (init * taxa * tempo)
    return montante
}

function jurosComposto (init, taxa, tempo){
    taxa = taxa / 100
    const montante = init * Math.pow ((1 + taxa), tempo)
    return montante.toFixed(2)
}


console.log (jurosSimples(1000, 10, 12))
console.log (jurosComposto(1000, 10, 12))