import LocalStorageService from "../../localStorage";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = (props) => {
    let auth = LocalStorageService.getCurrentUserFromLocalStorage();
    const location = useLocation();

    if (!auth?.userId) {
        return <Navigate to={location.pathname === "/manage-event" ? "/login" : "/"} />;
    }

    return props.children;
}

export default RequireAuth;