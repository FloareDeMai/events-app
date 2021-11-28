import {
    CREATE, CREATE_EVENT_FAIL,
    DELETE, DELETE_EVENT_FAIL, FETCH_ALL,
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

export const createEvent = (event, navigate, showSuccess, setErrorHandler) => async (dispatch) => {
    try{
        const {data} = await api.createEvent(event);
        dispatch({type: CREATE, payload: data})
        showSuccess("Event created successfully!")
        navigate("/")
    }catch (error){
        if(error.response){
            dispatch({type: CREATE_EVENT_FAIL, payload: error.response.data.message})
        }
        setErrorHandler({hasError: true, message: error.response.data.message});
    }
}

export const deleteEvent = (id, setErrorHandler) => async (dispatch) => {
   try{
       await api.deleteEvent(id);
       dispatch({type: DELETE, payload: id})
   }catch (error) {
       if(error.response){
           dispatch({type: DELETE_EVENT_FAIL, payload: error.response.data.message})
       }
       setErrorHandler({hasError: true, message: error.response.data.message});
   }
}
