import {AUTH, LOGIN_FAIL, REGISTER_FAIL} from "../constants/actionTypes"
import * as api from '../api/index.js';
import LocalStorageService from "../localStorage";


export const login = (formData, setUserLogged, navigate, setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });
        setUserLogged(LocalStorageService.getCurrentUserFromLocalStorage());
        navigate("/manage-event");
    } catch (error) {
        if(error.response){
            dispatch({type: LOGIN_FAIL, payload: error.response.data.message})
        }
        setErrorHandler({hasError: true, message: error.response.data.message});
    }
};

export const register = (formData, navigate, setErrorHandler) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);
        dispatch({ type: AUTH, data });
        navigate('/login');
    } catch (error) {
        if(error.response){
            dispatch({type: REGISTER_FAIL, payload: error.response.data.message})
        }
        setErrorHandler({hasError: true, message: error.response.data.message});
    }
};
