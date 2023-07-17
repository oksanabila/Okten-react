import React, {useEffect, useState} from 'react';
import {Car} from "../Car/Car";
import styles from './Cars.module.css'


const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    useEffect (() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json()).then(value => setCars(value))
    }, [onSave])
    return (
        <>
            <h2>Автомобілі в базі:</h2>
            <div className={styles.carsWrap}>
                {cars.map(car => <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>)}
            </div>
        </>
    );
};

export {Cars};