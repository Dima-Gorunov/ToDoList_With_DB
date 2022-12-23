import React from 'react';
import Notes from "./Notes";
import {connect} from "react-redux";
import { deleteNoteThunk } from '../ToolkitRedux/Reducers/AppReducer';


const NotesContainer = (props: any) => {
    return (
        props.Initial ? <Notes {...props} /> : <div>loading...</div>
    );
};
let mapStateToProps = (state: any) => {
    return {
        Notes: state.App.Notes,
        Initial: state.App.Initial
    }
}

export default connect(mapStateToProps, {
    deleteNoteThunk
})(NotesContainer);