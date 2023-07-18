import React, {useEffect} from 'react';
import {User} from "../User/User";
import styles from "../../../styles/Elements.module.css";
import {UsersService} from "../../../services/apiServices";

const Users = ({users, setUsers}) => {
    useEffect(() => {
        UsersService.setUsersService({setUsers})
    }, [])
    return (
        <div className={styles.elementsWrap}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};