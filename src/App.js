import React, {useMemo, useState} from 'react';
import './App.css';
import {TestUseMemo} from "./components/TestUseMemo/TestUseMemo";
import TestUseCallback from "./components/TestUseCallback/TestUseCallback";
import {ToggleComponent} from "./components/ToggleComponent/ToggleComponent";
import FetchComponent from "./components/FetchComponent/FetchComponent";
import {ArrayComponent} from "./components/ArrayComponent/ArrayComponent";

const App = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div className={'container'}>
            <div className={'grid-wrap'}>
                {/* Створити  компоненту TestUseMemo в та викликати її в Апп
                TestUseMemo має пропсу data (довільне занчення та данні)
                Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та
                мемомізувати її за допомоги useMemo якщо data змінюється*/}
                <div className={'item'}><TestUseMemo data={count}/></div>

                {/* Зробити те саме, але з використанням useCallback*/}
                <div className={'item'}><TestUseCallback data={count}/></div>

                {/* Створити хук useToggle, котрий буде міняти статус компоненти з true на false і навпаки.
                Сигнатура хука function useToggle(defaultValue)*/}
                <div className={'item'}><ToggleComponent/></div>

                {/*створити хук function useArray(defaultValue), котрий спроможний маніпулювати станом масива певної копмоненти*/}
                {/*В середині хука реалізувати методи add(item), remove(id)*/}
                <div className={'item'}><ArrayComponent/></div>

            </div>

            {/*створити хук useFetch, котрий спроможний робити запит на jsonplaceholder на /users, /posts, /comments в залежності від аргументу.*/}
            {/*Сигнатура хука function(endpoint)*/}
            <h2>FetchComponents</h2>
            <FetchComponent endpoint="/users"/>
            <FetchComponent endpoint="/posts"/>
            <FetchComponent endpoint="/comments"/>

        </div>
    );
};

export default App;