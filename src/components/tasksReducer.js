export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'set_tasks':
      return action.tasks
    case 'delete_task': {
      const updatedTasks = tasks.filter((task, idx) => action.index !== idx)

      return updatedTasks
    }
    case 'add_task': {
      const newTask = {
        completed: false,
        description: action.description,
      }

      const updatedTasks = [...tasks, newTask]

      return updatedTasks
    }
    case 'update_task': {
      const { index, field, value } = action

      const updatedTasks = tasks.map((task, idx) => {
        if (index == idx) {
          return { ...task, [field]: value }
        }
        return task
      })

      return updatedTasks
    }
  }
}
