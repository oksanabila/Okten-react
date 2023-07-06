import './App.css';
import {posts} from "./assets/posts";
import PostComponent from "./components/PostCard/PostComponent/PostComponent";
import PostCard from "./components/PostCard/PostCard";
import styles from "./components/PostCard/PostComponent/PostCard.module.css";

function App() {
    console.log(posts);
    return (
        <div className={'container'}>
            <h1>Перелік постів</h1>
            <PostCard/>
        </div>

    );
}




export default App;