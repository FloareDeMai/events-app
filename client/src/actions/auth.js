import {AUTH} from "../constants/actionTypes"
import * as api from '../api/index.js';


export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });
        navigate("/manage-event");
    } catch (error) {
        console.log(error);
    }
};