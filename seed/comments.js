const db = require('../db')
const  { Comments } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const comments = [
        { 
            name: "",
            comment: '',
            rating: '',
            recommendation: ''
        },
    ]

    await Comments.insertMany(comments)
    console.log('Created posts')
}
const run = async () => {
    await main()
    db.close
}

run()