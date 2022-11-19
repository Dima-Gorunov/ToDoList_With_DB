import {combineReducers, createStore} from "redux";
import {createStoreHook} from "react-redux";
import AppReducer from "./Reducers/AppReducer";
import AuthorizationReducer from "./Reducers/AuthorizationReducer";


export const rootReducer = combineReducers({
    App: AppReducer,
    Auth:AuthorizationReducer
})