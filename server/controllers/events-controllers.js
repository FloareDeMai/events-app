import {validationResult} from "express-validator";
import moment from "moment";
import mongoose from "mongoose";

import Event from "../models/event.js";
import User from "../models/user.js";
import HttpError from "../models/http-error.js";


export const getAllEvents = async (req, res, next) => {
    let events;
    try {
        events = await Event.find();
    } catch (err) {
        const error = new HttpError('Something went wrong, could not fetch the events', 500);
        return next(error);
    }

    res.status(200).json({events: events.map(event => event.toObject({getters: true})), success: true})
}

export const createEvent = async (req, res, next) => {
    const errors = validationResult(req);
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

    let user;
    try {
        user = await User.findById(creator);
    } catch (err) {
        const error = new HttpError('Creating event failed, please try again later!', 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError('Could not find user for provided id', 404);
        return next(error);
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdEvent.save({session: sess});
        user.events.push(createdEvent);
        await user.save({session: sess});
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Creating event failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({event: createdEvent});

}

export const deleteEvent = async (req, res, next) => {
    const eventId = req.params.eventId;
    let event;
    try {
        event = await Event.findById(eventId).populate('creator');
    } catch (err) {
        const error = new HttpError('Something went wrong!', 500);
        return next(error);
    }

    if (!event) {
        const error = new HttpError('Could not find event for this id', 404);
        return next(error);
    }


    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await event.remove({session: sess});
        event.creator.events.pull(event);
        await event.creator.save({session: sess});
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError('Something went wrong, could not delete event', 500);
        return next(error);
    }

    res.status(200).json({message: "Event deleted successfully!"});
}