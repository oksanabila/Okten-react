import React, {useEffect, useState} from 'react';
import './App.css';
import {UsersComponent} from "./components/UsersComponent/UsersComponent";
import {UserPosts} from "./components/UserPosts/UserPosts";


// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
//     Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні
//     на яку робиться state lifting, а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.

const App = () => {
    const [users, setUsers] = useState([]);
    const[userId, setUserId]= useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [userId]);

    return (
        <div className={'container containerGrid'}>
            <UsersComponent
                users={users}
                setUserId={setUserId}
            />
            {userId&&<UserPosts posts={posts}/>}

        </div>
    );

};

export default App;