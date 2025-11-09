import { Box, Paper, Typography } from '@mui/material'
import Task from './Task'
import { useTaskContext } from './TaskContext'

function TaskList() {
  const { tasks } = useTaskContext()

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
