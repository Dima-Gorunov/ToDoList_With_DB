import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestContainer from "./components/TestContainer";
import {DefaultApi} from "./Api/Api";
import {useEffect, useState} from "react";

function App() {
    return (
        <div className="App">
            <TestContainer/>
        </div>
    );
}

export default App;
