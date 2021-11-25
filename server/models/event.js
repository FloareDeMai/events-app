import mongoose from "mongoose";

const Schema = mongoose.Schema();

const eventSchema = new Schema({
    name: {type: String, required:true},
    location: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    submittedAt : {type: String, required: true},
    creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'}
})

const Event = mongoose.model('Event', eventSchema);

export default Event;