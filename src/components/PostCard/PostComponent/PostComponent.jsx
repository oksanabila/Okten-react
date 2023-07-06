import styles from './PostCard.module.css';

const PostComponent = (props) => {
    const { post, handleClick } = props;
    return (
        <div className={styles.postWrap}>
            <div className={styles.flex}>
                <h3>{post.title}</h3>
                <div>ID: {post.id}</div>
            </div>
            <button className={styles.btn} onClick={() => handleClick(post.body)}>show more</button>

            {/*TODO зробити демонстрацію цього блоку по кліку на кнопку. поки не можу зрозуміти як саме.*/}
           <div className={styles.dNone} id={'wrapper'}>
               <div>{post.body}</div>
               <div>{post.userId}</div>
           </div>

        </div>
    );
}
export default PostComponent;