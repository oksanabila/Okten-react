import React from 'react';
import styles from '../User.module.css'

const Company = ({company}) => {
    return (
        <>
            <h4>Company info</h4>
            <div className={styles.grid}>
                <div>Company name:</div>
                <div>{company.name}</div>

                <div>Catch phrase:</div>
                <div>{company.catchPhrase}</div>

                <div>BS:</div>
                <div>{company.bs}</div>
            </div>

        </>
    );
};

export {Company};

//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }