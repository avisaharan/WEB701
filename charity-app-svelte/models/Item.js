const { Schema, model } = require('mongoose')

const now = new Date().toISOString()
const ItemsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: now,
    },
    user_id: {
        type: String,
        required: true,
    },
})

const Item = model('item', ItemsSchema)

module.exports = Item
