import React from 'react';
import {User} from "./User/User";

const Users = ({users}) => {
    return (
        <>
            <h1>Перелік юзерів</h1>
            {users.map(user => <User key={user.id} user={user}/>)}
        </>
    );
};

export {Users};