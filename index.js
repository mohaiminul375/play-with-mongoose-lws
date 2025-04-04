const express = require('express')
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
// Db connects with mongoose

function errorHandler(err, rq, res, next) {
    if (res.headerSent) {
        return next(err)
    }
    res.status(500).json({ error: err })
}

app.listen(8000,()=>{
    console.log('app running on 8000')
})