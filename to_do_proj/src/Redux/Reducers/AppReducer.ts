import exp from "constants";
import {DefaultApi} from "../../Api/Api";
import {response} from "express";

const SET_INITIAL = "SET_INITIAL"
const CHANGE_INPUT = "CHANGE_INPUT"
const ADD_NOTES = "ADD_NOTES"
const DELETE_NOTE = "DELETE_NOTE"
const SORT_ARR = "SORT_ARR"
const SET_DAT_F_SERV = "SET_DAT_F_SERV"
const CHECK_DUPLICATE = "CHECK_DUPLICATE"
const DELETE_ALL_NOTES = "DELETE_ALL_NOTES"
type Notes = {
    Id: number,
    Text: string,
    Done: boolean,
}


let initialState = {
    DefText: "Создайте заметку",
    InputValue: "",
    Notes: null as Notes[] | null,
    IdArray: null as number[] | null,
    Duplicate: false,
    DataFromServer: null as any | null,
    Initial: false
}
export type InitialStateType = typeof initialState

let AppReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case CHANGE_INPUT: {
            return {
                ...state,
                InputValue: action.payload
            }
        }

        case SET_INITIAL: {
            return {
                ...state,
                Initial: true
            }
        }

        case ADD_NOTES: {
            return {
                ...state,
                Notes: state.Notes ? [...state.Notes, {
                    Text: state.InputValue,
                    Done: false,
                    Id: action.payload
                }
                ] : null
            }
        }

        case DELETE_NOTE: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes.filter(e => e.Id !== action.payload)
                    : null
            }
        }

        case SORT_ARR: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes.map(e => e).sort((a, b) => a.Id - b.Id)
                    : null
            }
        }

        case CHECK_DUPLICATE: {
            return {
                ...state,
                Duplicate: state.Notes ? state.Notes.some(e => e.Text.toLowerCase() == state.InputValue.toLowerCase() && e.Text !== "") : false
            }
        }

        case DELETE_ALL_NOTES: {
            return {
                ...state,
                Notes: null
            }
        }

        case SET_DAT_F_SERV: {
            return {
                ...state,
                Notes: state.Notes ? state.Notes : action.payload.map((e: any, index: any) => ({
                    Id: e.id,
                    Text: e.text,
                    Done: false
                }))
            }
        }

        default: {
            return state
        }
    }
}

export const addNotesThunk = (id: any) => {
    return async (dispatch: any) => {
        dispatch(addNotes(id))
        dispatch(sortNodes())
        dispatch(changeInput(""))
    }
}

export const setDataOnServerThunk = (text: string) => {
    return async (dispatch: any) => {
        await DefaultApi.postList(text).then(response => {
            if (response.result_code == 1) {
                return
            }
            dispatch(addNotesThunk(response.id))
        })
    }
}

export const setDataFromServerThunk = () => {
    return async (dispatch: any) => {
        await DefaultApi.getLists().then(response => {
            dispatch(setDataFromServer(response.data))
            dispatch(setInitial())
        })
    }
}

export const deleteAllNotesThunk = (payload: any) => {
    return async (dispatch: any) => {
        await DefaultApi.deleteAllLists()
        await setDataFromServerThunk()
        dispatch(deleteAllNotes())
        dispatch(checkDuplicate())
    }
}

export const deleteNoteThunk = (payload: any) => {
    return async (dispatch: any) => {
        await DefaultApi.deleteList(payload)
        await setDataFromServerThunk()
        console.log(payload);
        dispatch(deleteNote(payload))
        dispatch(checkDuplicate())
    }
}

export const changeInput = (payload: string) => ({type: CHANGE_INPUT, payload})
export const sortNodes = () => ({type: SORT_ARR})
export const checkDuplicate = () => ({type: CHECK_DUPLICATE})
const addNotes = (payload: any) => ({type: ADD_NOTES, payload})
const setDataFromServer = (payload: any) => ({type: SET_DAT_F_SERV, payload})
const deleteAllNotes = () => ({type: DELETE_ALL_NOTES})
const deleteNote = (payload: number) => ({type: DELETE_NOTE, payload})
const setInitial = () => ({type: SET_INITIAL})
export default AppReducer