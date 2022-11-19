import {applyMiddleware, createStore} from "redux";
import {createStoreHook} from "react-redux";
import {rootReducer} from "./RootReducer";
import thunk from "redux-thunk";


export const store = createStore(rootReducer,applyMiddleware(thunk))