import React from 'react';
import styles from '../User.module.css'

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website} = user;

    return (
        <>
            <h4>Main info</h4>
            <div className={styles.grid}>
                <div>ID:</div>
                <div>{id}</div>

                <div>Name:</div>
                <div>{name}</div>

                <div>Username:</div>
                <div>{username}</div>

                <div>Email:</div>
                <div>{email}</div>

                <div>Phone:</div>
                <div>{phone}</div>

                <div>Website:</div>
                <div>{website}</div>
                
            </div>

        </>
    );
};

export {UserDetails};