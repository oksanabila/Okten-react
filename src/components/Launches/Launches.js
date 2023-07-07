import React, {useEffect} from 'react';
import {useState} from "react";
import {Launch} from "./Launch/Launch";
import styles from './Launches.module.css'

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => {
            const filtered = value.filter(item => item.launch_year !== '2020');
            console.log(filtered);
            setLaunches(filtered)
        })
    }, [])

    return (
        <div className={styles.launchesWrap}>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}

        </div>
    );
};

export {Launches};