<<<<<<< HEAD
import Task from "./Task";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";
=======
import { Box, Paper, Typography } from '@mui/material'
import Task from './Task'
import { useTaskContext } from './TaskContext'
>>>>>>> 23483825c6cb0a6122ed259abd0232e1786dea50

function TaskList() {
  const { tasks } = useTaskContext()

<<<<<<< HEAD
// This also renders how many tasks are in the list.
function TaskList() {
   const { tasks } = useContext(TaskContext);
   return (
      <div>
         {tasks.length > 0 ? (
            tasks.map((task, index) => (
               <Task
                  key={index} // in a map, always pass a unique key value
                  {...task}
                  index={index}
               />
            ))
         ) : (
            <p>No tasks to display!</p>
         )}

         {tasks.length > 0 && (
            <p>There are {tasks.length} tasks in the list. </p>
         )}
      </div>
   );
}
export default TaskList;
=======
  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        p: 2,
      }}
    >
      {tasks.length > 0 ? (
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Typography
            variant='h6'
            sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}
          >
            Task List
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {tasks.map((task, index) => (
              <Task key={index} {...task} index={index} />
            ))}
          </Box>

          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ mt: 2, textAlign: 'center' }}
          >
            There {tasks.length === 1 ? 'is' : 'are'} {tasks.length}{' '}
            {tasks.length === 1 ? 'task' : 'tasks'} in the list.
          </Typography>
        </Paper>
      ) : (
        <Paper
          elevation={2}
          sx={{
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant='body1' color='text.secondary'>
            No tasks to display!
          </Typography>
        </Paper>
      )}
    </Box>
  )
}

export default TaskList
>>>>>>> 23483825c6cb0a6122ed259abd0232e1786dea50
