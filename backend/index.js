const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); 
const bodyparser = require('body-parser'); 
const userRoute = require('./routes/userRoute'); 
const tweetRoute = require("./routes/tweetRoute"); 

mongoose.connect(process.env.DBCON).then(() => {
    console.log(`DB connected for twitter on ${process.env.DBCON}`)
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// use of CORS middlewarre
const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

app.use('/user', userRoute); 
app.use('/tweet', tweetRoute); 


app.get('/home', (req, res) => {
    res.status(200).json({
        msg: "home coming from back.."
    })
})

const port = process.env.PORT || 7999
app.listen(port, () => {
    console.log(`server connected on ${port}`);
})

