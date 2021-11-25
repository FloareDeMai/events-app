import express from "express";
import {check} from "express-validator";
import moment from "moment";

import {createEvent, getAllEvents} from "../controllers/events-controllers.js";

const router = express.Router();

router.get("/", getAllEvents);
//todo only authenticated users can create an event
router.post("/",
    [check('name').not().isEmpty(),
        check("location").not().isEmpty(),
        check("startDate").custom((value, {req}) => moment(value).isSameOrAfter(new Date().toISOString().split('T')[0])),
        check("endDate").custom((value, {req}) => moment(value).isSameOrAfter(req.body.startDate))


], createEvent);

export default router;

