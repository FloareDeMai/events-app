import Event from "../models/event";
import moment from "moment";
import HttpError from "../models/http-error";

export const updateStatus = async () => {
    let results;
    try {
        results = await Event.updateMany({endDate: {$lt: moment(new Date()).format("YYYY-MM-DD")}}, {status: false});
    } catch (err) {
        const error = new HttpError('Something went wrong, could not update the events', 500);
        return error;
    }
    return results;
}