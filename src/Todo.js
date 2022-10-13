import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, Icon } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction } from '@material-ui/core';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './context/todos.context';

export default function Todo({ task, completed, id }) {

    const { removeTodo, toggleTodo } = useContext(TodosContext)
    const [isEditing, toggleIsEdiging] = useToggleState(false)

    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? <EditTodoForm id={id} task={task} toggleIsEdiging={toggleIsEdiging} /> :
                <>

                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>

                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton arial-label="edit" onClick={toggleIsEdiging}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem >
    )
}
