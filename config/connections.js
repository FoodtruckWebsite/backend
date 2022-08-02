const mongoose = require('mongoose')
console.log('uri='+process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => console.log('connected to mongodb'))