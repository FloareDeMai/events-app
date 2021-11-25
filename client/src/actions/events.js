import {
    CREATE,
    DELETE,
} from "../constants/actionTypes";
import LocalStorageService from "../localStorage";
import {useNavigate} from "react-router-dom";


export const createEvent = (event, navigate, showToastSuccess) => async (dispatch) => {
    LocalStorageService.addEventToLocalStorage(event, showToastSuccess);
    dispatch({type: CREATE, payload: event})
    navigate("/");
    // if(navigateUrl){
    //     const navigate = useNavigate();
    //     navigate(navigateUrl)
    // }

}

export const deleteAllEvents = () => async (dispatch) => {
    LocalStorageService.removeAllEventsFromLocalStorage();
    dispatch({ type: DELETE, payload:[]});

}