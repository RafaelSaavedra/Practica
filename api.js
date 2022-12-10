const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/mipractica?retryWrites=true&w=majority')

app.get('/play', user.list)
app.post('/play', user.create)
app.get('/play/:id', user.get)
app.put('/play/:id', user.update)  
app.patch('/play/:id', user.update) 
app.delete('/play/:id', user.destroy)

app.use(express.static('app'))


app.get('/',(req, res) => {
//console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})


app.get('*', (req,res) => {
    res.status(404).send('Esta página no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})

