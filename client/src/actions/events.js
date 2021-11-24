import {
    CREATE,
    DELETE,
} from "../constants/actionTypes";
import LocalStorageService from "../localStorage";


export const createEvent = (event, navigate, showToastSuccess) => async (dispatch) => {
    LocalStorageService.addEventToLocalStorage(event, showToastSuccess);
    dispatch({type: CREATE, payload: event})
    navigate("/")
}

export const deleteAllEvents = () => async (dispatch) => {
    LocalStorageService.removeAllEventsFromLocalStorage();
    dispatch({ type: DELETE, payload:[]});

}