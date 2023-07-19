import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {Context} from "../CarContainer";

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const {reset, register, handleSubmit, setValue} = useForm();
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context);

    if(carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }
    const save = async (car) => {
        try {
            await carService.create(car);
            setErrors(null)
            reset()
            setTrigger()
            setCarForUpdate(null)

        } catch (e) {
            setErrors(e.response.data);
        }

    }

    const update = async (car) => {
        try{
            await carService.updateById(carForUpdate.id, car)
            reset()
            setErrors(null)
            setTrigger()
            setCarForUpdate(null)

        }catch (e) {
            setErrors(e.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <div><label>brand:</label><input type="text" placeholder={'brand'} {...register('brand')}/></div>
                <div><label>price:</label><input type="text" placeholder={'price'} {...register('price')}/></div>
                <div><label>year:</label><input type="text" placeholder={'year'} {...register('year')}/></div>
                <button>{!carForUpdate ? 'save': 'update'}</button>
            </form>
            {errors && <h4>{JSON.stringify(errors)}</h4>}
        </div>
    );
};

export {CarForm};