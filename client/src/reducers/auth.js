import * as actionType from '../constants/actionTypes';

const getAuthState = () => {
    const auth = localStorage.getItem("user");
    try {
        return JSON.parse(auth);
    } catch (error) {
        return null;
    }
};

const newAuth = getAuthState();
const authReducer = (state = { authData: newAuth }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data };
        case actionType.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;