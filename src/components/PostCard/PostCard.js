import PostComponent from "./PostComponent/PostComponent";
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';


export const PostCard = () => {
    const [ posts, setPosts ] = useState(null);
    const [ errors, setErrors ] = useState();
    let wrapper = document.getElementById('wrapper');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((errors) => console.log(errors.response))
            .finally(() => {
                console.log('Promise finished')
            });

    },[]);

    const handleClick = (value) => {
        alert(`${value}`);

    };

    return (
        <>
            {posts?.map((post, id) => {
                return (
                    <PostComponent
                        key={id}
                        post={post}
                        handleClick={handleClick}
                    />
                );
            })}
        </>);
}
export default PostCard;




