const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const Posts = new Schema(
    {
        _id: {type: Schema.Types.ObjectId, default: null},
        title: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        comments: [{type: Schema.Types.ObjectId, ref:'comments'}]
    },

    {timestamps: true}
)

module.exports = Posts