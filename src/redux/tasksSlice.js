import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      const tasks = action.payload
      return tasks
    },
    addTask: (state, action) => {
      const newTask = {
        completed: false,
        description: action.payload,
      }

      const updatedTasks = [...state, newTask]
      return updatedTasks
      // state.push(newTask) // ONLY VALID IN REDUX TOOLKIT
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter(
        (task, index) => index !== action.payload
      )

      return updatedTasks
    },
    updateTask: (state, action) => {
      const { field, value, index } = action.payload
      const updatedTasks = state.map((task, idx) => {
        if (index == idx) {
          return { ...task, [field]: value }
        }
        return task
      })

      return updatedTasks
    },
  },
})
