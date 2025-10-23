import { useState } from 'react'
import EditDescription from './EditDescription'
import { useTaskContext } from './TaskContext'

function Task({ description = '', completed = false, index }) {
  const [editing, setEditing] = useState(false)
  const { deleteTask, updateCompleted, updateDescription } = useTaskContext()

  const handleEdit = (index, description) => {
    updateDescription(index, description)
    setEditing(false)
  }

  const handleCancelEdit = () => {
    setEditing(false)
  }

  const handleDelete = () => {
    deleteTask(index)
    setEditing(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        gap: '10px',
      }}
    >
      <input
        type='checkbox'
        checked={completed}
        onChange={(e) => {
          updateCompleted(index, e.target.checked)
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
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {description}
        </span>
      )}
      {!completed && <button onClick={() => setEditing(true)}>Edit</button>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Task
