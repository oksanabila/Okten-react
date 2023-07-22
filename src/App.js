import React from 'react';
import './App.css';
import {Todos} from "./components/Todos/Todos";

const App = () => {
    return (
        <div className={'container'}>
            <Todos/>
        </div>
    );
};

export default App;