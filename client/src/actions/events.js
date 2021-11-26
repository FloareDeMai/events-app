import {
    CREATE,
    DELETE, FETCH_ALL,
} from "../constants/actionTypes";
import * as api from '../api/index.js';


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
        dispatch({type: CREATE, payload: data})
        showSuccess("Event created successfully!")
        navigate("/")
    }catch (err){
        console.log(err)
    }
}

export const deleteEvent = (id) => async (dispatch) => {
   try{
       await api.deleteEvent(id);
       dispatch({type: DELETE, payload: id})
   }catch (err) {
       console.log(err)
   }
}
