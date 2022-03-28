const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
},
{
    versionKey:true,
    timestamps:true,
});
module.exports =  mongoose.model("todo", todoSchema);