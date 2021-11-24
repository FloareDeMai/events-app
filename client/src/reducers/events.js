import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";
import LocalStorageService from "../localStorage/index"

let initialState = LocalStorageService.getEventsFromLocalStorage();

const events = (events = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...events, action.payload];
        case DELETE:
            return []
        default:
            return events;
    }
};

export default events;