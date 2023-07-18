import React from 'react';
import {useForm} from "react-hook-form";
import styles from '../../../styles/ElementForm.module.css'
import {UsersService} from "../../../services/apiServices";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm();
    const save = (user) => {
        UsersService.saveUsersService({user, setUsers, reset})
    }
    return (
        <form onSubmit={handleSubmit(save)} className={styles.form}>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>name:</label>
                <input className={styles.formField} type="text" placeholder={'name'} {...register('name')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>username:</label>
                <input className={styles.formField} type="text" placeholder={'username'} {...register('username')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>email:</label>
                <input className={styles.formField} type="text" placeholder={'email'} {...register('email')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>city:</label>
                <input className={styles.formField} type="text" placeholder={'city'} {...register('address.city')}/>
            </div>
            <button className={'btn btn-green'}>Save</button>
        </form>
    );
};

export {UserForm};