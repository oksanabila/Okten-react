import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import '../../../styles/styles.css'
import {Context} from "../../../pages";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const navigate = useNavigate();
    const {setCommentId} = useContext(Context);

    const handleClick = () => {
        navigate(`posts/${postId}`);
        setCommentId(id)
    }
    return (
        <div className={'item item_noFlex'}>
            <div className={'flex'}>
                <div>postId: {postId}</div>
                <div>id: <b>{id}</b></div>
            </div>
            <p>email: {email}</p>
            <p>name: {name}</p>
            <div>body: {body}</div>
            <button onClick={handleClick}>Show post</button>
        </div>
    );
};

export {Comment};

