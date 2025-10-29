import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TaskDetailPage() {
  // useParams from React router to get the id from the url
  const { id } = useParams()

  // Create a state to store the task we want to display
  const [task, setTask] = useState(null)

  // This useEffect hook runs on mount
  // Fetches our API to get the data about this single task
  useEffect(() => {
    getTask()
  }, [])

  async function getTask() {
    try {
      // API CALL
      const response = await axios.get(
        `https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks/${id}`
      )
      // destruct data
      const { data } = response
      // set the state to the task we got back
      setTask(data)
    } catch (error) {
      // in the case of an error, console.error it, and reset task to null
      console.error(error)
      setTask(null)
    }
  }

  if (!task) return null

  return (
    <div>
      <h1>Task Detail</h1>
      <p>Description: {task.description}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'} </p>
    </div>
  )
}
export default TaskDetailPage
