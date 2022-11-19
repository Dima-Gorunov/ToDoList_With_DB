import React, {useEffect} from 'react';
import Notes from "./Notes";
import {connect} from "react-redux";
import {deleteNoteThunk} from '../Redux/Reducers/AppReducer';
import {safeAssign} from "@reduxjs/toolkit/dist/query/tsHelpers";

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