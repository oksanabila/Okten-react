import React, {useEffect, useState} from 'react';
import {TodoItem} from "../TodoList/TodoItem/TodoItem";
import {Album} from "./Album/Album";
import {albumsService} from "../../services/albumsService";

const AlbumsList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);
    return (
        <div>
            <h1>Albums list</h1>
            <div className={'items'}>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>

        </div>
    );
};

export {AlbumsList};