import React from 'react';
import styles from '../User.module.css'

const Company = ({company}) => {
    const {name, catchPhrase, bs} = company;

    return (
        <>
            <h4>Company info</h4>
            <div className={styles.grid}>
                <div>Company name:</div>
                <div>{name}</div>

                <div>Catch phrase:</div>
                <div>{catchPhrase}</div>

                <div>BS:</div>
                <div>{bs}</div>
            </div>

        </>
    );
};

export {Company};