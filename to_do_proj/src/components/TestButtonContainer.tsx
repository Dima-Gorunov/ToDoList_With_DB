import React from "react";
import Test from "./Test";
import {connect} from "react-redux";
import TestButton from "./TestButton";


const TestButtonContainer: React.FC = (props) => {
    return (
        <TestButton/>
    )
};

let mapStateToProps = (state: any) => {
    return {
        DefText: state.App.DefText
    }
}

export default connect(mapStateToProps, {})(TestButtonContainer);