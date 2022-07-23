const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/NOW', {
    useNewUrlParser: true,
})

mongoose.connection.on('connected', () => console.log('connected to mongoose'))