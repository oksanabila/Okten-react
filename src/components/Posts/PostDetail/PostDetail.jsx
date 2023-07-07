import React from 'react';
import styles from './PostDetail.module.css'

const PostDetail = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={styles.postDetailWrap}>
            <h3>Detail Info</h3>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};



export default PostDetail;