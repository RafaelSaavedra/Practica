const express = require('express')
const mongoose = require('mongoose')
const play = require('./user.controller')
const app = express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/mipractica?retryWrites=true&w=majority')

app.get('/users', play.list)
app.post('/users', play.create)
app.get('/users/:id', play.get)
app.put('/users/:id', play.update)  
app.patch('/users/:id', play.update) 
app.delete('/users/:id', play.destroy)

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
