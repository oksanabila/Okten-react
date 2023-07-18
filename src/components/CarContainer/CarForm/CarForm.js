import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import styles from '../../../styles/ElementForm.module.css'
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/carValidator";
import {CarsService} from "../../../services/apiServices";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm(
        {
            mode: 'all',
            resolver: joiResolver(carValidator)
        }
    );

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }

    }, [carForUpdate])
    const save = (data) => {
        CarsService.saveCarsService({data, setOnSave, reset})
    }

    const setFormValues = () => {
        setValue('brand', '1', {shouldValidate: true})
        setValue('price', '-1', {shouldValidate: true})
        setValue('year', '2026', {shouldValidate: true})
    }

    const update = (car) => {
        CarsService.updateCarService({car, carForUpdate, setOnSave, setCarForUpdate, reset})
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(!carForUpdate ? save : update)}
                className={styles.form}>
                <h2>Додати автомобіль</h2>
                <div className={styles.formItem}><label className={styles.formLabel}>brand:</label><input  className={styles.formField} type="text" placeholder={'brand'} {...register('brand', {
                    // required: true
                })}/>
                    {errors.brand && <span className={styles.formError}>{errors.brand.message}</span>}
                </div>
                <div className={styles.formItem}><label className={styles.formLabel}>price:</label><input  className={styles.formField} type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value: 0, message: 'price must be gte 0'},
                    // max: {value: 1000000, message: 'price must be lte 1000000'},
                })}/>
                    {errors.price&& console.log(errors.price.message)}
                    {errors.price && <span className={styles.formError}>{errors.price.message}</span>}
                </div>
                <div className={styles.formItem}><label className={styles.formLabel}>year:</label><input  className={styles.formField} type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    // required: true,
                    // min: {value: 1990, message: 'year must be gte 0'},
                    // max: {value: new Date().getFullYear(), message: `year must be lte ${new Date().getFullYear()}`},
                })}/>
                    {errors.year && <span className={styles.formError}>{errors.year.message}</span>}
                </div>
                <div className={'flex'}>
                    <button className={'btn'} disabled={!isValid}>{!carForUpdate?'Save':'Update'}</button>
                </div>
            </form>
        </>
);
};

export {CarForm};


// import React, {useState} from 'react';
// import styles from './ElementForm.module.css'
//
//
// const CarForm = ({setOnSave}) => {
//     const initialState = {
//         brand:'',
//         price:'',
//         year:'',
//     }
//     const [car, setCar] = useState(initialState);
//
//     const inputHandle = (e) => {
//         setCar(prev =>({...prev, [e.target.name]:e.target.value}))
//     };
//     const save = (e) => {
//         e.preventDefault();
//         fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
//             headers:{'content-type': 'application/json'},
//             body:JSON.stringify(car),
//             method: 'POST',
//         }).then(value => value.json()).then(() => {
//             setOnSave(prev => !prev)
//             setCar(initialState)
//         })
//     }
//     return (
//         <form onSubmit={save} className={styles.form}>
//             <h2>Додати автомобіль</h2>
//             <div><label>brand:</label><input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/></div>
//             <div><label>price:</label><input type="text" value={car.price} name={'price'} onChange={inputHandle}/></div>
//             <div><label>year:</label><input type="text" value={car.year} name={'year'} onChange={inputHandle}/></div>
//             <button className={'btn'}>Save</button>
//         </form>
//     );
// };
//
// export {CarForm};