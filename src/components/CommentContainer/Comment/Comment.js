import React from 'react';
import styles from '../../../styles/Element.module.css'

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={styles.elementWrap}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};