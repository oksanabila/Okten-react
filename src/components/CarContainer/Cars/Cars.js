import React, {useEffect, useState} from 'react';
import {Car} from "../Car/Car";
import styles from '../../../styles/Elements.module.css'
import {CarsService} from "../../../services/apiServices";


const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    useEffect (() => {
        CarsService.setCarsService({setCars})
    }, [onSave])
    return (
        <>
            <h2>Автомобілі в базі:</h2>
            <div className={styles.elementsWrap}>
                {cars.map(car => <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>)}
            </div>
        </>
    );
};

export {Cars};