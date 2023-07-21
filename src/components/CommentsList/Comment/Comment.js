import React from 'react';
import '../../../styles/styles.css'
import {Link} from "react-router-dom";
import {postsService} from "../../../services/postsService";


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={'item item_noFlex'}>
            <div className={'flex'}>
                <div>postId: {postId}</div>
                <div>id: <b>{id}</b></div>
            </div>

            <p>email: {email}</p>

            <p>name: {name}</p>

            <div>body: {body}</div>

            <Link to={`/posts/${postId}`}>open related post</Link>
        </div>
    );
};

export {Comment};