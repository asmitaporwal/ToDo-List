const mongoose=require('mongoose');


var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const Userdb = mongoose.model('userdb',schema);

module.exports=Userdb;