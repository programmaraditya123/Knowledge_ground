const mongoose = require('mongoose');

const dsaSchema = new mongoose.Schema({
    indexTopic:{
        type:String,
        required:true,
    },
    parenttopic:{
        type:String,
    },
    content:{
        type:String,
        required:true,

    },
    image:{
        type:Buffer,
        contentType:String,
    }
    

},{timestamps:true})

module.exports = mongoose.model('DSA',dsaSchema);