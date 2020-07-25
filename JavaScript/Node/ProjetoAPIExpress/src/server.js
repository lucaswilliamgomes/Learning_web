const baseData = require('./DataBase.js')

const port = 3003

const express = require('express')

const app = express()

app.get("/Product" , (req, res, next) => {
    res.send(baseData.getList()) // Converte para JSON
})

app.get("/Product/:id", (req, res, next) => {
    res.send(baseData.getProduct(req.param.id))
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})

