import {combineReducers} from "redux";
import userReducer from "./userReducer";
import deviceReducer from "./deviceReducer";
import basketReducer from "./basketReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
    userReducer,
    deviceReducer,
    basketReducer,
    popupReducer,
})