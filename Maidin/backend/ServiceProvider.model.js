const mongoose = require('mongoose')

const ServiceProviderSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    cnic : String,
    experience : Number,
    contact : String,
    email : String,
    password : String,
    serviceType : String,
    photo : []
},{
    collection : 'Service_Provider'
})

const SP = new mongoose.model("Service Provider", ServiceProviderSchema)

module.exports = SP
