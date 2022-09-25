import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid"
import App from './App';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';


function TodoApp() {

    const initialTodos = [
        { id: 1, task: "Clean", completed: true },
        { id: 2, task: "Wash", completed: false },
        { id: 3, task: "Dry", completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {
            id: uuidv4(), task: newTodoText, completed: false
        }])
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    }
    const toggleTodo = todoId => {
        const updateTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updateTodos)
    }
    const editTodo = (todoId, newTask) => {
        const updateTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        )
        setTodos(updateTodos)
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "fafafa"
        }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper >
    )
}

export default TodoApp;