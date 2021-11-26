import {
    CREATE,
    DELETE, FETCH_ALL,
} from "../constants/actionTypes";
import * as api from '../api/index.js';
import LocalStorageService from "../localStorage";

export const getAllEvents = () => async (dispatch) => {
    try{
        const {data} = await api.fetchEvents();
        dispatch({type: FETCH_ALL, payload: data})
    }catch (err){
        console.log(err)
    }
}

export const createEvent = (event, navigate, showSuccess) => async (dispatch) => {
    try{
        const {data} = await api.createEvent(event);
        console.log(data)
        dispatch({type: CREATE, payload: data})
        showSuccess("Event created successfully!")
        navigate("/")
    }catch (error){
        console.log(error)
    }
}

export const deleteAllEvents = () => async (dispatch) => {
    LocalStorageService.removeAllEventsFromLocalStorage();
    dispatch({ type: DELETE, payload:[]});

}