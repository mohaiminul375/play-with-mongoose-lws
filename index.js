const express = require('express')
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler')
require('dotenv').config()

//express app initialization
const app = express();
app.use(express.json());


// Db connects with mongoose
mongoose.connect(`mongodb+srv://todo_mongoose:${process.env.DB_PASS}@cluster0.ixszr3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('connect to mongoose'))
    .catch(err => console.log(err))


app.use('/todo', todoHandler)


// function errorHandler(err, rq, res, next) {
//     if (res.headerSent) {
//         return next(err)
//     }
//     res.status(500).json({ error: err })
// }

app.listen(8000, () => {
    console.log('app running on 8000')
})