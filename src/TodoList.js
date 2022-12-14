import React from 'react'
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo'

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo task={todo.task} key={todo.id} completed={todo.completed} id={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                            {i < todos.length - 1 && <Divider />}

                        </>
                    ))}
                </List>
            </Paper>

        )
    return null;
}
