import express from "express";
import { check } from "express-validator";

import {login, signup} from "../controllers/users-controller.js";
import {fileUpload} from '../middleware/file-upload.js'

const router = express.Router();

router.post("/signup",
    fileUpload.single('image'),
    [check('name').not().isEmpty(),
        check('email').normalizeEmail({gmail_remove_dots:false}).isEmail(),
        check('password').isLength({min: 6})
            .custom((value, { req }) => value === req.body.confirmPassword)],
    signup);

router.post("/login", login);


export default router;