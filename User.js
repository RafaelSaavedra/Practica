const mongoose = require('mongoose')
const { stringify } = require('querystring')

const Users = mongoose.model('User',{
    name:{type: String, required:true, minLength: 3},
    option:{type: String, required: true, minLength: 3},
    computer:{type: String},
    result:{type: String}
})
module.exports = Users