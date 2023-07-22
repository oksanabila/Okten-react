import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "./Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div >
            <h1>Comments list</h1>
            <div className={'items'}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>

        </div>
    );
};

export {Comments};
