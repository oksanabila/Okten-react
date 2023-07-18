import React, {useState} from 'react';
import {UserForm} from "./UserForm/UserForm";
import {Users} from "./Users/Users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <h1>Users</h1>
            <UserForm setUsers={setUsers}/>
             <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UserContainer};