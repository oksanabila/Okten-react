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
                <button className={styles.btn} onClick={() => setIsShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</button>
            </div>
            {/*<button className={styles.btn} onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>*/}

            {/*TODO зробити демонстрацію цього блоку по кліку на кнопку. поки не можу зрозуміти як саме.*/}

            {
                isShow&& <PostDetail post={post}/>
            }

            {/*<div className={styles.dNone} id={'wrapper'}>*/}
            {/*    <div>{post.body}</div>*/}
            {/*    <div>{post.userId}</div>*/}
            {/*</div>*/}

        </div>
    );
};

export default Post;