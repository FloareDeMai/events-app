import {AUTH} from "../constants/actionTypes"
import * as api from '../api/index.js';


export const login = (formData, setUserLogged, navigate, showToastError) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });
        setUserLogged(true);
        navigate("/manage-event");
    } catch (error) {
        const err = error.response.data.message
        showToastError(err);
    }
};

export const register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);

        dispatch({ type: AUTH, data });

        navigate('/login');
    } catch (error) {
        console.log(error.response.data.message);
    }
};