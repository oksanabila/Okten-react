import {useEffect, useState} from 'react';
import styles from './Car.module.css'

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {method: 'DELETE'}).then(() => {
            setOnSave(prev=>!prev)
        })
    };
    return (
        <div className={styles.carWrap}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year {year}</div>
            <div className={'flex'}>
                <button className={'btn btn-green'} onClick={() => setCarForUpdate(car)}>Update</button>
                <button className={'btn btn-red'} onClick={deleteCar}>Delete</button>
            </div>

        </div>
    );

};

export {Car};