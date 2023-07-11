import React from 'react';
import styles from '../User.module.css'

const UserAddress = ({address}) => {
    const {street, suite, city} = address;

    return (
        <>
            <h4>Address info</h4>
            <div className={styles.grid}>
                <div>Street:</div>
                <div>{street}</div>

                <div>Suite:</div>
                <div>{suite}</div>

                <div>City:</div>
                <div>{city}</div>
            </div>

        </>
    );
};

export {UserAddress};