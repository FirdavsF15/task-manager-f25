import { useEffect, useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from './components'
import axios from 'axios'

function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const response = await axios.get(
        'https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks'
      )

      const { data } = response

      setTaskList(data)
    } catch (error) {
      console.error('Something went wrong', error)
      setTaskList([])
    }
  }

  function deleteTask(index) {
    const updatedTasks = taskList.filter((task, idx) => index !== idx)

    setTaskList(updatedTasks)
  }

  function addTask(description) {
    const newTask = {
      completed: false,
      description: description,
    }

    const updatedTasks = [...taskList, newTask]

    setTaskList(updatedTasks)
  }

  function updateTaskField(index, field, value) {
    const updatedTasks = taskList.map((task, idx) => {
      if (index == idx) {
        return { ...task, [field]: value }
      }
      return task
    })

    setTaskList(updatedTasks)
  }

  function updateCompleted(index, completed) {
    updateTaskField(index, 'completed', completed)
  }

  function updateDescription(index, description) {
    updateTaskField(index, 'description', description)
  }

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={taskList}
        deleteTask={deleteTask}
        updateCompleted={updateCompleted}
        updateDescription={updateDescription}
      />
    </>
  )
}

export default App
