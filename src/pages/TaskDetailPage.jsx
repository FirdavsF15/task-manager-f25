import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TaskDetailPage() {
  const { id } = useParams()

  const [task, setTask] = useState(null)

  async function getTask() {
    const response = await axios.get(
      `https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks/${id}`
    )
    const { data } = response
    setTask(data)
  }

  useEffect(() => {
    getTask()
  }, [])

  if (!task) return null

  return (
    <div>
      <h1>Task Detail</h1>
      <p>
        Completed: <span>{task.completed ? 'Yes' : 'No'}</span>
      </p>
      <p>
        Description: <span>{task.description}</span>
      </p>
    </div>
  )
}
export default TaskDetailPage
