require('dotenv').config();

const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err,decoded) => {
            if(err) return reject(err)

            return resolve(decoded)
        });
    })
}

const authenticate = async (req, res, next) => {
    if(!req.headers.authorization){
        return req.status(400).send({message: " Authentication token not found"});
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return req.status(400).send({message: " Authentication token not found"});
    }
    const token = req.headers.authorization.trim().split(" ")[1]
    let decoded;
    try{
        decoded = await verifyToken(token);
    }catch(err){
        console.log(err);
        return res.status(400).send({message: "Authentication token not found"});
    }

    req.userID = decoded.user._id;
}

module.exports = authenticate;