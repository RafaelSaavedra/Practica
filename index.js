const mongoose = require('mongoose')
const user = require('./user.controller')
mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/mipractica?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User ({username: 'chancho feliz', edad: 1105})
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const play = await User.find()
    console.log (play)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'chanchooooo felizzzz'})
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: 'chanchooooo felizzzz'})
    console.log(user)
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'chanchooooo felizzzz'})
    console.log(user)
    user.edad = 30
    await user.save()
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username:'chanchito triste'})
    console.log(user)
    if (user){
        await user.remove()
    }
}

//eliminar()
