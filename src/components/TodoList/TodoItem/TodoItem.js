import React from 'react';
import '../../../styles/styles.css'
const TodoItem = ({item}) => {
    const {userId, id, title, completed} = item;

    return (
        <div className={completed ? 'item done' : 'item notDone'}>
            <div className={'flex'}>
                <div>userId: {userId}</div>
                <div>id: <b>{id}</b></div>
            </div>

            <div>title: {title}</div>
            <div className={'status'}>{completed ? 'done' : 'not done yet'}</div>
        </div>
    );
};

export {TodoItem};