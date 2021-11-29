import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 6},
    image:{type: String},
    events: [{type: mongoose.Types.ObjectId, required: true, ref: 'Event'}]
})
const User = mongoose.model('User', userSchema);

export default User;