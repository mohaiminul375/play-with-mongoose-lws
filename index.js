const express = require('express')
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler')


//express app initialization
const app = express();
app.use(express.json());


// Db connects with mongoose
mongoose.connect('mongodb://localhost/todos')
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