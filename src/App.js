import React from 'react';
import './App.css';
import {CarContainer} from "./components/CarContainer/CarContainer";


const App = () => {
    return (
        <div className={'container'}>
            {/*Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень*/}
            {/*3. Реалізувати створення, видалення та оновлення машин http://owu.linkpc.net/carsAPI/v1/doc*/}
            <CarContainer/>
        </div>
    );
};

export default App;