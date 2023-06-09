const mongoose = require('mongoose')
const PointSchema = require('./Point')



let studentSchema = mongoose.Schema({
    name: String,
    standard: String,
    education: String,
    avatar_url: String,
    skills: [String],
    location: {
        type: PointSchema
        ,
        index: '2dsphere'
    }
})


module.exports = mongoose.model('Student', studentSchema)