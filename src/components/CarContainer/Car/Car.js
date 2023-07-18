import styles from '../../../styles/Element.module.css'
import {CarsService} from "../../../services/apiServices";

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    const deleteCar = () => {
        CarsService.deleteCarService({setOnSave, id})
    };
    return (
        <div className={styles.elementWrap}>
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