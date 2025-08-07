const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express()
const cookieParser = require('cookie-parser')
const connectToDB = require('./db/db.js')
const userRoutes = require('./routes/user.route')
const captainRoutes = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes')

connectToDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)
app.use('/maps', mapsRoutes)

module.exports = app;