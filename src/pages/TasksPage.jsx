import { useEffect } from 'react'
import '../App.css'
import { TaskContext, TaskForm, TaskList } from '../components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { tasksSlice } from '../redux/tasksSlice'

function TasksPage() {
  // const [taskList, setTaskList] = useState([])
  // const [taskList, dispatch] = useReducer(tasksReducer, [])
  const taskList = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const actions = tasksSlice.actions

  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    try {
      const response = await axios.get(
        'https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks'
      )

      const { data } = response

      dispatch(actions.setTasks(data))
    } catch (error) {
      console.error('Something went wrong', error)
      dispatch(actions.setTasks([]))
    }
  }

  function handleDeleteTask(index) {
    dispatch(actions.deleteTask(index))
  }

  function addTask(description) {
    dispatch(actions.addTask(description))
  }

  function updateTaskField(index, field, value) {
    dispatch(actions.updateTask({ index, field, value }))
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
        deleteTask: handleDeleteTask,
        updateCompleted,
        updateDescription,
      }}
    >
      <TaskForm />
      <TaskList />
    </TaskContext>
  )
}

export default TasksPage
