const db = require('../db')
const  { Posts } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = [
        { 
            title: "Brazil",
            description: 'It was great, ate lots of food.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p9v13nMdA0C_7A0hElvd1QHaEK%26pid%3DApi&f=1'
        },
        {
            title: "England",
            description: 'Amazing sites to see!',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gdtJX-kXHUnUFzsGaBG2JQHaDt%26pid%3DApi&f=1'
        },
        {
            title: "Spain",
            description: 'Beautiful culture and amazing food!',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TtFqdR5xD7D6xhdkn9xC6gHaFV%26pid%3DApi&f=1'
        }
    ]
    await Posts.insertMany(posts)
    console.log('Created posts')
}
const run = async () => {
    await main()
    db.close
}

run()