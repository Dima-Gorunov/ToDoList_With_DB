import React from 'react';
import {connect} from "react-redux";


const WithRepeat: React.FC = (Component: any) => {

    return <Component  />

};

let mapStateToProps = (state: any) => {
    return {
    }
}

export default connect(mapStateToProps, {})(WithRepeat);