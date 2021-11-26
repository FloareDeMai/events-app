import {AUTH} from "../constants/actionTypes"
import * as api from '../api/index.js';


export const login = (formData, setUserLogged, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });
        setUserLogged(true);
        navigate("/manage-event");
    } catch (error) {
        console.log(error);
    }
};