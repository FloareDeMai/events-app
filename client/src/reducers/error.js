import {REGISTER_FAIL, CREATE_EVENT_FAIL, LOGIN_FAIL, DELETE_EVENT_FAIL} from "../constants/actionTypes";

const authError = {
    message: "",
};

const error = (state = authError, action) => {
    switch (action.type) {
        case REGISTER_FAIL:
            return { message: action.payload };
        case LOGIN_FAIL:
            return { message: action.payload };
        case CREATE_EVENT_FAIL:
            return { message: action.payload };
        case DELETE_EVENT_FAIL:
            return { message: action.payload };
        default:
            return state;
    }
};

export default error;