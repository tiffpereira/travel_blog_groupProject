const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Comment = new Schema(
    {
        name: {type: String, required: true},
        rating: {type: String, required: true},
        recomendation: {type: String, required: true},
        comment: {type: String, required: true}
    },

    {timestamps: true}
)

module.exports = Comment