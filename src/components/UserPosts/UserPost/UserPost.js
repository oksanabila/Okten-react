import React from 'react';

const UserPost = ({post}) => {
    const {id, userId,  title, body} = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>ID: {id}</div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {UserPost};
