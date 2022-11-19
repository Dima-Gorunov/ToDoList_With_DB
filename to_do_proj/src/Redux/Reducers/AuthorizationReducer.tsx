import React from 'react';
const SET_AUTH="SET_AUTH"

let initialState = {
    Authorized: false
}


const AuthorizationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "": {
            return {
                ...state
            }
        }

        case SET_AUTH:{

            return {
                ...state,
                Authorized: action.payload
            }
        }
        default: {
            return state
        }
    }
};



export const setAuth=(payload:boolean)=>({type:SET_AUTH, payload})




export default AuthorizationReducer;