import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import styles from '../../../styles/ElementForm.module.css'
import {CommentsService} from "../../../services/apiServices";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = (comment) => {
        CommentsService.saveCommentsService({comment, setComments, reset})
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>postId:</label>
                <input className={styles.formField} type="text" placeholder={'postId'} {...register('postId')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>name:</label>
                <input className={styles.formField} type="text" placeholder={'name'} {...register('name')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>email:</label>
                <input className={styles.formField} type="text" placeholder={'email'} {...register('email')}/>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>body:</label>
                <input className={styles.formField} type="text" placeholder={'body'} {...register('body')}/>
            </div>
            <button className={'btn btn-green'}>Save</button>
        </form>
    );
};

export {CommentForm};