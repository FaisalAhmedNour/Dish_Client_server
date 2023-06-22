const express = require('express')
const cors = require('cors')
const Chefs = require('./chefs.json')
const Foods = require('./foods.json')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(Chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = Chefs.find(chef => chef._id === id);
    res.send(chef)
})

app.get('/foods', (req, res) => {
    res.send(Foods)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})