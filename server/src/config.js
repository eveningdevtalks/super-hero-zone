require('dotenv').config()

module.exports = {
    mongoUri: process.env.MONGO_URI,
    secret: process.env.SECRET
}
