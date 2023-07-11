import {UserPost} from "./UserPost/UserPost";

const UserPosts = ({posts}) => {

    return (
       <div>
           <h2>Перелік постів</h2>
           {posts.map(post => <UserPost key={post.id} post={post}/>)}
       </div>

    );
};

export {UserPosts};