import React from 'react';

import '../../../styles/styles.css'

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div className={'item'}>
            <div className={'flex'}>
                <div>userId: {userId}</div>
                <div>id: <b>{id}</b></div>
            </div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};
