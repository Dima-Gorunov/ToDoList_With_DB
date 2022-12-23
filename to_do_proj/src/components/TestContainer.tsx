import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Test from "./Test";
import {
    addNotesThunk,
    changeInput,
    checkDuplicate,
    deleteAllNotesThunk,
    deleteNoteThunk,
    setDataFromServerThunk,
    setDataOnServerThunk,
    sortNodes
} from '../ToolkitRedux/Reducers/AppReducer';


const TestContainer = (props: any) => {
    useEffect(() => {
        props.setDataFromServerThunk()
    })
    if (!props.Initial) {
        return <div style={{color: "white"}}>The server - not started</div>
    }
    return (
        <Test {...props} />
    );
};

let mapStateToProps = (state: any) => {
    return {
        DefText: state.App.DefText,
        Initial: state.App.Initial,
        DataFromServer: state.App.DataFromServer,
        InputValue: state.App.InputValue,
        Notes: state.App.Notes,
        IdArray: state.App.IdArray,
        Duplicate: state.App.Duplicate,
        DuplicateArray: state.App.DuplicateArray,
        TextArray: state.App.TextArray
    }
}

export default  connect(mapStateToProps, {
    changeInput,
    addNotesThunk,
    deleteNoteThunk,
    sortNodes,
    checkDuplicate,
    deleteAllNotesThunk,
    setDataOnServerThunk,
    setDataFromServerThunk
})(TestContainer);