const express = require("express");
const User = require("../models/user.model");
const authenticate = require("../middleware/authenticate.middleware")

const router = express.Router();

router.post("",authenticate,async(req,res)=>{
    try {
        const user = await User.create(req.body);
    } catch (error) {
        console.log('error:', error)
        
    }
});

module.exports = router
