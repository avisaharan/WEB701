const mongoose = require('mongoose')
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
    tokens: {
        type: Number,
        default: 0,
    },
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('user', User)
