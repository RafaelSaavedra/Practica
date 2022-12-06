const mongoose = require('mongoose')
const play = require('./play.controller')
mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/mipractica?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const play = new User ({username: 'chancho feliz', edad: 1105})
    const savedUser = await play.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log (users)
}

//buscarTodo()

const buscar = async () => {
    const play = await User.find({ username: 'chanchooooo felizzzz'})
    console.log(play)
}

//buscar()

const buscarUno = async () => {
    const play = await User.findOne({username: 'chanchooooo felizzzz'})
    console.log(play)
}

//buscarUno()

const actualizar = async () => {
    const play = await User.findOne({ username: 'chanchooooo felizzzz'})
    console.log(play)
    play.edad = 30
    await play.save()
}

//actualizar()

const eliminar = async () => {
    const play = await User.findOne({ username:'chanchito triste'})
    console.log(play)
    if (play){
        await play.remove()
    }
}

//eliminar()
