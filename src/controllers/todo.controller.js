const express = require("express");
const router = express.Router();
const todo  = require("../models/todo.model");


router.post("", async (req, res) => {

    // req.body.user_id = req.userID;
    try{
        const todo = await todo.create(req.body)
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});
router.get("", async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const todo = await todo.find().lean().excle()
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});
router.delete("/:id", async (req, res) => {

    try{
        const todo = await todo.findByIdAndDelete(req.params.id);
        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});

module.exports = router ;