import React from 'react';
import styles from '../User.module.css'

const UserDetails = ({user}) => {
    return (
        <>
            <h4>Main info</h4>
            <div className={styles.grid}>
                <div>ID:</div>
                <div>{user.id}</div>

                <div>Name:</div>
                <div>{user.name}</div>

                <div>Username:</div>
                <div>{user.username}</div>

                <div>Email:</div>
                <div>{user.email}</div>

                <div>Phone:</div>
                <div>{user.phone}</div>

                <div>Website:</div>
                <div>{user.website}</div>
                
            </div>

        </>
    );
};

export {UserDetails};

//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",