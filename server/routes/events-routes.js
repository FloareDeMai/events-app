import express from "express";
import {check} from "express-validator";
import moment from "moment";

import {createEvent, deleteEvent, getAllEvents} from "../controllers/events-controllers.js";
import {checkAuth} from "../middleware/check-auth.js";

const router = express.Router();

router.get("/", getAllEvents);

router.use(checkAuth);

router.post("/",
    [check('name').not().isEmpty(),
        check("location").not().isEmpty(),
        check("startDate").isDate().custom((value, {req}) => moment(value).isSameOrAfter(new Date().toISOString().split('T')[0])),
        check("endDate").isDate().custom((value, {req}) => moment(value).isSameOrAfter(req.body.startDate))],
    createEvent);

router.delete("/:eventId", deleteEvent);

export default router;

