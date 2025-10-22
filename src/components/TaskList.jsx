import Task from './Task'

function TaskList({ tasks, deleteTask, updateCompleted, updateDescription }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            key={index}
            {...task}
            index={index}
            deleteTask={deleteTask}
            updateCompleted={updateCompleted}
            updateDescription={updateDescription}
          />
        ))
      ) : (
        <p>No tasks to display!</p>
      )}

      {tasks.length > 0 && <p>There are {tasks.length} tasks in the list. </p>}
    </div>
  )
}
export default TaskList
