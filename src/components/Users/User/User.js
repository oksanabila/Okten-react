import React from 'react';
import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";
import {Company} from "./Company/Company";
import styles from './User.module.css'

const User = ({user}) => {
    return (
        <div className={styles.userWrap}>
            <div className={styles.flex}>
                <h2>{user.name}</h2>
                <h2>ID: {user.id}</h2>
            </div>

            <UserDetails user={user} key={user.id}/>
            <UserAddress address={user.address} key={user.id}/>
            <Company company={user.company} key={user.id}/>
        </div>
    );
};

export {User};