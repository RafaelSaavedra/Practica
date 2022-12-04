const mongoose = require('mongoose')
const { stringify } = require('querystring')

const Users = mongoose.model('User',{
    name:{type: String, required:true, minLength: 3},
    option:{type: String, required: true, minLength: 3}
})
module.exports = Users