import {validationResult} from "express-validator";
import mongoose from "mongoose";

import Event from "../models/event.js";
import HttpError from "../models/http-error.js";
import moment from "moment";



export const getAllEvents = async (req, res, next) => {
    let events;
    try{
        events = await Event.find();
    }catch (err){
        const error = new HttpError('Something went wrong, could not fetch the events', 500);
        return next(error);
    }

    res.status(200).json({events: events.map(event => event.toObject({getters: true}))})
}

export const createEvent = async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return next(
            new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    const {name, location, startDate, endDate, creator} = req.body;

    const createdEvent = new Event({
        name,
        location,
        startDate,
        endDate,
        submittedAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        creator
    })

    try{
        await createdEvent.save();
    }catch (err) {
        const error = new HttpError(
            'Creating event failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ event: createdEvent });


}