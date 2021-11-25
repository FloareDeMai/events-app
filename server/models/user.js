import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 6},
    image:{type: String},
    events: [{type: mongoose.Types.ObjectId, required: true, ref: 'Event'}]
})

// userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export default User;