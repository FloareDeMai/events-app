import HttpError from "../models/http-error.js";
import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new Error('Authentication failed!')
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

        req.userData = {userId: decodedToken.userId};
        next();
    } catch (err) {
        const error = new HttpError('Authentication failed!', 403);
        return next(error);
    }

}