import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment/Comment";
import {commentsService} from "../../services/commentsService";

const CommentsList = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            <h1>Comments list</h1>
            <div className={'items'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>

        </div>
    );
};

export {CommentsList};