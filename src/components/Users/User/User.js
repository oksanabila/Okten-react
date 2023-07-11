import React from 'react';
import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";
import {Company} from "./Company/Company";
import styles from './User.module.css'

const User = ({user}) => {
    const {id, name, address, company} = user;
    return (
        <div className={styles.userWrap}>
            <div className={styles.flex}>
                <h2>{name}</h2>
                <h2>ID: {id}</h2>
            </div>

            <UserDetails user={user} key={id}/>
            <UserAddress address={address} key={id}/>
            <Company company={company} key={id}/>
        </div>
    );
};

export {User};