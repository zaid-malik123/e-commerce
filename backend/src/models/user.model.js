import mongoose from "mongoose";

const userSchema = mongoose.Schema({
name: {
    type: String,
},
email: {
    type: String,
    unique: true
},
password: {
    type: String,
},
cart: {
    type: Array,
    default: []
}

},{timestamps:true, minimize:false})

const User = mongoose.model("User", userSchema)
export default User