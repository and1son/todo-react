import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { TodosContext } from './context/todos.context'

export default function EditTodoForm({ id, task, toggleIsEdiging }) {
    const { dispatch } = useContext(TodosContext)
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            //editTodo(id, value)
            dispatch({ type: 'EDIT', id: id, newTask: value })
            reset()
            toggleIsEdiging()

        }}
            style={{ marginLeft: '1rem', width: '50% ' }}
        >
            <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
        </form>

    )
}
