import {createSlice} from "@reduxjs/toolkit";
import {DefaultApi} from "../../Api/Api";

type Notes = {
    Id: number,
    Text: string,
    Done: boolean,
}

const AppSlice = createSlice({
    name: "appSlice",
    initialState: {
        DefText: "Создайте заметку",
        InputValue: "",
        Notes: null as Notes[] | null,
        IdArray: null as number[] | null,
        Duplicate: false,
        DataFromServer: null as any | null,
        Initial: false
    },
    reducers: {
        changeInput(state, action) {
            state.InputValue = action.payload
        },
        setInitial(state) {
            state.Initial = true
        },
        addNotes(state, action) {
            state.Notes && state.Notes.push({
                Text: state.InputValue,
                Done: false,
                Id: action.payload
            })
        },
        deleteNote(state, action) {
            state.Notes = state.Notes && state.Notes.filter(e => e.Id !== action.payload)
        },
        sortNodes(state) {
            state.Notes = state.Notes && state.Notes.sort((a, b) => a.Id - a.Id)
        },
        checkDuplicate(state) {
            state.Duplicate = state.Notes ? state.Notes.some(e => e.Text.toLowerCase() === state.InputValue.toLowerCase() && e.Text !== "") : false
        },
        deleteAllNotes(state) {
            state.Notes = null
        },
        setDataFromServer(state, action) {
            state.Notes = state.Notes ? state.Notes : action.payload.map((e: any, index: any) => ({
                Id: e.id,
                Text: e.text,
                Done: false
            }))
        },
    }
})


export const addNotesThunk = (id: any) => {
    return async (dispatch: any) => {
        dispatch(AppSlice.actions.addNotes(id))
        dispatch(AppSlice.actions.sortNodes())
        dispatch(AppSlice.actions.changeInput(""))
    }
}

export const setDataOnServerThunk = (text: string) => {
    return async (dispatch: any) => {
        await DefaultApi.postList(text).then(response => {
            if (response.result_code === 1) {
                return
            }
            dispatch(addNotesThunk(response.id))
        })
    }
}

export const setDataFromServerThunk = () => {
    return async (dispatch: any) => {
        DefaultApi.getLists().then(response => {
            dispatch(AppSlice.actions.setDataFromServer(response.data))
            dispatch(AppSlice.actions.setInitial())
        })
    }
}

export const deleteAllNotesThunk = () => {
    return async (dispatch: any) => {
        await DefaultApi.deleteAllLists()
        await setDataFromServerThunk()
        dispatch(AppSlice.actions.deleteAllNotes())
        dispatch(AppSlice.actions.checkDuplicate())
    }
}

export const deleteNoteThunk = (payload: any) => {
    return async (dispatch: any) => {
        await DefaultApi.deleteList(payload)
        await setDataFromServerThunk()
        dispatch(AppSlice.actions.deleteNote(payload))
        dispatch(AppSlice.actions.checkDuplicate())
    }
}


/*
export const getData = () => {
    return async dispatch => {
        await defApi.getToDos().then(response => {
            if (response.status === 200) {
                dispatch(toolkitSlice.actions.setToDos(response.data))
            }
        })
    }
}*/


export default AppSlice.reducer

export const {
    changeInput,
    sortNodes,
    checkDuplicate,
} = AppSlice.actions