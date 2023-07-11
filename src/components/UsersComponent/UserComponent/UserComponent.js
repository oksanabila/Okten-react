import React from 'react';
import styles from '../UsersComponent.module.css'

const UserComponent = ({user, setUserId}) => {
    const {id, name, email, phone, address} = user;

    return (
        <div className={styles.itemWrap}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address.city}</p>
            <button  className={styles.btn} onClick={() => setUserId(id)}>Show posts</button>
        </div>
    )
}

export {UserComponent};