import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    {
        id: 1, task: 'Nesto', completed: false
    },
    {
        id: 2, task: 'Nesto2', completed: true
    },
]

export const TodosContext = createContext();

export function TodosProvider(props) {
    //const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos)
    const todosStuff = useTodoState(defaultTodos)
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}