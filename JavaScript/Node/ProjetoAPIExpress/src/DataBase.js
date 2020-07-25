const sequence = {
    _id : 1, 
    get id () {
        return this._id++
    }
} 

const Products = {}

function SaveProduct (name) {
    Products[sequence.id] = name
}

function getProduct (id){
    return Products[id] || {}
}

function getList (){
    return Object.values(Products)
}

module.exports = {SaveProduct, getProduct, getList}