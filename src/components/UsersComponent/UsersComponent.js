import React from 'react';
import {UserComponent} from "./UserComponent/UserComponent";

const UsersComponent = ({users, setUserId}) => {

    return (
        <div>
            <h2>Перелік юзерів</h2>
            {users.map(user => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );

//такий запис не працює : ????
    // {users?.map((user, id) => {
    //
    //     return (
    //         <UserComponent
    //             key={id}
    //             user={user}
    //             handleClick={handleClick}
    //         />);
    // })}

};

export {UsersComponent};