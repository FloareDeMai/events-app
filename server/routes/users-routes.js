import express from "express";
import { check } from "express-validator";

import {login, signup} from "../controllers/users-controller.js";

const router = express.Router();

router.post("/signup",
    [check('name').not().isEmpty(),
        check('email').normalizeEmail({gmail_remove_dots:false}).isEmail(),
        check('password').isLength({min: 6}).custom((value, { req }) => value === req.body.confirmPassword)],
    signup);
router.post("/login", login);


export default router;