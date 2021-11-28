import { combineReducers } from "redux";

import events from "./events";
import auth from './auth';
import error from "./error";

export const reducers = combineReducers({events, auth, error});