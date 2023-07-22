import React, {useEffect, useState} from 'react';
import {todoService} from "../../services";
import {Todo} from "./Todo/Todo";
import '../../styles/styles.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div>
            <h1>TODO list</h1>
            <div className={'items'}>
                {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            </div>

        </div>
    );
};

export {Todos};
