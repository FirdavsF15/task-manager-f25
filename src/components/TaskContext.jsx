<<<<<<< HEAD
import { createContext } from "react";

export const TaskContext = createContext(undefined);
=======
import { createContext, useContext } from 'react'

export const TaskContext = createContext(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used in a TaskContext Provider')
  }

  return context
}
>>>>>>> 23483825c6cb0a6122ed259abd0232e1786dea50
