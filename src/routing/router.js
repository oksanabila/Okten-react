import {createBrowserRouter} from "react-router-dom";
import {StartComponent} from "../components/startComponent/startComponent";
import {TodoList} from "../components/TodoList/TodoList";
import {AlbumsList} from "../components/AlbumsList/AlbumsList";
import {CommentsList} from "../components/CommentsList/CommentsList";
import {Posts} from "../components/Posts/Posts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StartComponent/>,
    },
    {
        path: "/todos",
        element: <TodoList/>,
    },
    {
        path: "/albums",
        element: <AlbumsList/>,

    },
    {
        path: "/comments",
        element: <CommentsList/>,
    },
    {
        path: "/posts",
        element: <Posts/>,
    },
]);