const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true,
        trim : true
    },
email: {
    type : String,
required:true, 
unique: true
},
age:{
    type: Number
}
},{timestamps:true});
const UserModel=  mongoose.model('users',userSchema)
module.exports = UserModel