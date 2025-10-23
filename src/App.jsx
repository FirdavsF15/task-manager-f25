import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { TaskContext, TaskForm, TaskList, tasksReducer } from './components'
import axios from 'axios'

function App() {
  // const [taskList, setTaskList] = useState([])
  const [taskList, dispatch] = useReducer(tasksReducer, [])

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const response = await axios.get(
        'https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks'
      )

      const { data } = response

      // setTaskList(data)
      dispatch({
        type: 'set_tasks',
        tasks: data,
      })
    } catch (error) {
      console.error('Something went wrong', error)
      // setTaskList([])
      dispatch({
        type: 'set_tasks',
        tasks: [],
      })
    }
  }

  function deleteTask(index) {
    dispatch({
      type: 'delete_task',
      index: index,
    })
  }

  function addTask(description) {
    dispatch({
      type: 'add_task',
      description: description,
    })
  }

  function updateTaskField(index, field, value) {
    dispatch({
      type: 'update_task',
      index,
      field,
      value,
    })
  }

  function updateCompleted(index, completed) {
    updateTaskField(index, 'completed', completed)
  }

  function updateDescription(index, description) {
    updateTaskField(index, 'description', description)
  }

  return (
    <TaskContext
      value={{
        tasks: taskList,
        addTask,
        deleteTask,
        updateCompleted,
        updateDescription,
      }}
    >
      <TaskForm />
      <TaskList />
    </TaskContext>
  )
}

export default App
