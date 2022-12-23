import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit"
import AppReducer from "./Reducers/AppReducer";

const RootReducer = combineReducers({
    App: AppReducer
})

export const store = configureStore({
    reducer: RootReducer
})