import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload
    },
    addTask: (state, action) => {
      const description = action.payload
      state.push({
        description,
        completed: false,
      })
    },
    deleteTask: (state, action) => {
      const index = action.payload
      return state.filter((task, idx) => index !== idx)
    },
    updateTask: (state, action) => {
      const { index, field, value } = action.payload
      state[index][field] = value
    },
  },
})
