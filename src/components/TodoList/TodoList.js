import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todoService";
import {TodoItem} from "./TodoItem/TodoItem";
import '../../styles/styles.css'

const TodoList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setList(data))
    }, []);


    return (
        <div>
            <h1>TODO list</h1>
            <div className={'items'}>
                {list.map(item => <TodoItem key={item.id} item={item}/>)}
            </div>

        </div>
    );
};

export {TodoList};