import React, {useState} from 'react';
import styles from './Post.module.css'
import PostDetail from "../PostDetail/PostDetail";
const Post = ({post}) => {
    const [isShow, setIsShow] = useState(false);
    const {id, title} = post;
    return (
        <div className={styles.postWrap}>
            <div>ID: {id}</div>
            <h3>{title}</h3>
            <div className={styles.btnWrap}>
                {/*<button className={styles.btn} onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>*/}
                <button className={styles.btn} onClick={() => setIsShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</button>
            </div>

            {
                isShow&& <PostDetail post={post}/>
            }

        </div>
    );
};

export default Post;