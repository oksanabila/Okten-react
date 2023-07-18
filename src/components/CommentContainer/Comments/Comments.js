import React, {useEffect} from 'react';
import {Comment} from "../Comment/Comment";
import styles from '../../../styles/Elements.module.css'
import {CommentsService} from "../../../services/apiServices";

const Comments = ({comments, setComments}) => {
    useEffect(() => {
        CommentsService.setCommentsService({setComments})
    }, [])
    return (
        <div className={styles.elementsWrap}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};