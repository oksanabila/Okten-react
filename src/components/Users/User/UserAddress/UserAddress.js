import React from 'react';
import styles from '../User.module.css'

const UserAddress = ({address}) => {
    return (
        <>
            <h4>Address info</h4>
            <div className={styles.grid}>
                <div>Street:</div>
                <div>{address.street}</div>

                <div>Suite:</div>
                <div>{address.suite}</div>

                <div>City:</div>
                <div>{address.city}</div>
            </div>

        </>
    );
};

export {UserAddress};

// "address": {
// //     "street": "Kulas Light",
// //         "suite": "Apt. 556",
// //         "city": "Gwenborough",
// //         "zipcode": "92998-3874",
// //         "geo": {
// //         "lat": "-37.3159",
// //             "lng": "81.1496"
// //     }
// // },