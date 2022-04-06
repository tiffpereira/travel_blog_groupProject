const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Comments = new Schema(
    {
        _id: {type: Schema.Types.ObjectId, default: null},
        name: {type: String, required: true},
        comment: {type: String, required: true},
        rating: {type: String, required: true},
        recomendation: {type: String, required: true},
        comments: {type: String, required: true}
    },

    {timestamps: true}
)

module.exports = Comments