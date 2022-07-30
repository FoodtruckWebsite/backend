const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const ownerRoutes = require('./routes/ownerRoutes')
const truckRoutes = require('./routes/truckRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const passport = require('passport')

require('dotenv').config()
require('./config/connections')
require('./config/passport')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(cookieParser())

app.use('/owner', ownerRoutes)
app.use('/truck', truckRoutes)
app.use('/user', userRoutes)
app.use(authRoutes)

app.listen(port, () => console.log('listening on port ' + port))