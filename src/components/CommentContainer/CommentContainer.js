import React, {useState} from 'react';
import {CommentForm} from "./CommentForm/CommentForm";
import {Comments} from "./Comments/Comments";

const CommentContainer = () => {
    const [comments, setComments] = useState([]);
    return (
        <div>
            <h1>Comments</h1>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments} setComments={setComments}/>
        </div>
    );
};

export {CommentContainer};