import React from 'react';
import '../../styles/styles.css'

const StartComponent = () => {
    return (
        <div>
            <h1>Start page</h1>
            <div className={'items'}>
                <h3> <a href={'/todos'}>Open list of all TODO</a></h3>
                <h3> <a href={'/albums'}>Open list of all albums</a></h3>
                <h3> <a href={'/comments'}>Open list of all comments</a></h3>
            </div>
        </div>
    );
};

export {StartComponent};