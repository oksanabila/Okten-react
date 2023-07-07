import React from 'react';
import styles from './Launch.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = launch;
    return (
        <div className={styles.launchWrap}>
           <div>
               <h3>{mission_name}</h3>
               <div>Year: {launch_year}</div>
           </div>
            <img src={mission_patch_small} alt={mission_name} className={styles.img}/>
        </div>
    );
};

export {Launch};