import LocalStorageService from "../../localStorage";
import {Navigate} from "react-router-dom";

const RequireAuth = (props) => {
    let auth = LocalStorageService.getCurrentUserFromLocalStorage();

    if (!auth?.userId) {
        return <Navigate to="/login" />;
    }

    return props.children;
}

export default RequireAuth;