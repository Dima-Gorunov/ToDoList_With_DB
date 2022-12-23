import {createSlice} from "@reduxjs/toolkit";

const AuthorizeSlice = createSlice({
    name: "authSlice",
    initialState: {
        Authorized: false
    },
    reducers: {
        setAuth(state, action) {
            state.Authorized = action.payload
        }
    }
})
export const {
    setAuth
} = AuthorizeSlice.actions