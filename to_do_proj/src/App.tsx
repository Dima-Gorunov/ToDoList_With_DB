import React, {useLayoutEffect, useState} from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestContainer from "./components/TestContainer";
import TestButtonContainer from "./components/TestButtonContainer";
import {useTheme} from "./Hooks/useTheme";

function App() {
    return (
        <div className="App">
            <TestContainer/>
        </div>
    );
}

export default App;
