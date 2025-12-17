<<<<<<< HEAD
import { useState, useContext } from "react";
import EditDescription from "./EditDescription";
import { TaskContext } from "./TaskContext";

/**
 * This renders a single Task
 * It's purpose is to show the checkbox, the description, and the edit and delete buttons
 * All the logic of the buttons are passed down from App.jsx
 */
function Task({ description = "", completed = false, index }) {
   // Create a state to conditionally render the edit input
   const [editing, setEditing] = useState(false);

   const { deleteTask, updateCompleted, updateDescription } = useContext(TaskContext);

   // after editing, update the description, and then turn off editing
   const handleEdit = (index, description) => {
      updateDescription(index, description);
      setEditing(false);
   };

   // cancel editing
   const handleCancelEdit = () => {
      setEditing(false);
   };

   // on delete, delete the task and then turn off editing (if there is)
   const handleDelete = () => {
      deleteTask(index);
      setEditing(false);
   };

   return (
      <div
         // The style prop is similar to CSS syntax
         style={{
            display: "flex",
            alignItems: "center",
            padding: "2px",
            gap: "10px",
         }}
      >
         <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
               updateCompleted(index, e.target.checked);
            }}
         />
         {editing ? (
            <EditDescription
               index={index}
               description={description}
               onEdit={handleEdit}
               onCancel={handleCancelEdit}
            />
         ) : (
            <span
               style={{
                  // optional syntax: if true ? this value : otherwise this value
                  textDecoration: completed ? "line-through" : "none",
               }}
            >
               {description}
            </span>
         )}
         {!completed && <button onClick={() => setEditing(true)}>Edit</button>}
         <button onClick={handleDelete}>Delete</button>
      </div>
   );
=======
import { useState } from 'react'
import EditDescription from './EditDescription'
import { useTaskContext } from './TaskContext'
import { Checkbox, Typography, IconButton, Stack, Box } from '@mui/material'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as EyeIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function Task({ id, description = '', completed = false, index }) {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const { deleteTask, updateCompleted, updateDescription } = useTaskContext()

  const handleEdit = (id, newDescription) => {
    updateDescription(id, newDescription)
    setEditing(false)
  }

  const handleCancelEdit = () => {
    setEditing(false)
  }

  const handleDelete = () => {
    deleteTask(id)
    setEditing(false)
  }

  const handleView = () => {
    navigate(`/tasks/${id}`)
  }

  return (
    <Box
      sx={{
        p: 1.5,
        mb: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 2,
      }}
    >
      <Stack direction='row' alignItems='center' spacing={2} flexGrow={1}>
        <Checkbox
          checked={completed}
          onChange={(e) => updateCompleted(index, e.target.checked)}
          color='primary'
        />

        {editing ? (
          <EditDescription
            index={index}
            id={id}
            description={description}
            onEdit={handleEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <Typography
            variant='body1'
            sx={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? 'text.secondary' : 'text.primary',
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>

      <Stack direction='row' spacing={1}>
        {!completed && !editing && (
          <IconButton
            color='primary'
            size='small'
            onClick={() => setEditing(true)}
          >
            <EditIcon />
          </IconButton>
        )}

        <IconButton color='error' size='small' onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>

        <IconButton size='small' onClick={handleView}>
          <EyeIcon />
        </IconButton>
      </Stack>
    </Box>
  )
>>>>>>> 23483825c6cb0a6122ed259abd0232e1786dea50
}

export default Task;
