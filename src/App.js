import React, {createContext} from 'react';
import './App.css';
import {Child1} from "./components/Child1/Child1";
import {Child2} from "./components/Child2/Child2";

// context
// Зробити структуру компонентів -
// App
// Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1

const Context = createContext(null);

const App = () => {
    return (
        <Context.Provider value={[]}>
            <div className={'container grid'}>
                <Child1/>
                <Child2/>
            </div>
        </Context.Provider>

    );
};

export {App, Context};