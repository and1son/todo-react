import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, Icon } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction } from '@material-ui/core';

export default function Todo({ task, completed }) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {task}
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton arial-label="edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
