const mongoose = require('mongoose')
const { stringify } = require('querystring')

const Users = mongoose.model('User',{
    name:{type: String, required:true, minLength: 3},
    option:{type: String, required: true, minLength: 3},

})

const Results = mongoose.model('Resultado',{
    jugador:{type:String},
    computadora:{type:String},
    resultado:{type:String}
})

module.exports = Users
module.exports = Results