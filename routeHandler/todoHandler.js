const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("TODO", todoSchema)



// get all todos
router.get('/', async (req, res) => {

})

// get todo by id
router.get('/:id', async (req, res) => {

})
//  POST A TODO     
router.post('/', async (req, res) => {
    console.log('hit server')
    const newTodo = new Todo(req.body);
    const result = await newTodo.save();
    console.log(result);
})
// post multiple todd
router.post('/all', async (req, res) => {
    const result =await Todo.insertMany(req.body);
    console.log(result)
})
// Put Todo
router.put('/:id', async (req, res) => {

})
// Delete TODO
router.delete('/:id', async (req, res) => {

})

module.exports = router;