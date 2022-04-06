const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Comments = new Schema(
    {
        id_number: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        rating: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('comments', Comments)