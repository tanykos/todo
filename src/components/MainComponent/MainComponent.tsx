import { StyledPaper } from './MainComponent.styled';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import Actions from '../Actions';
import { useEffect, useState } from 'react';
import { Task, TaskFilter } from '../../types';

export const MainComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksFiltered, setTasksFiltered] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>(TaskFilter.All);
  
  const addTask = (taskText: string) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    const tasksUpdated = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )

    setTasks(tasksUpdated);
  };

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      if (activeFilter === TaskFilter.Active) return !task.completed;
      if (activeFilter === TaskFilter.Completed) return task.completed;
      return true;
    });

    setTasksFiltered(filteredTasks);
  }, [tasks, activeFilter])

  return (
    <StyledPaper 
      square
      sx={{
        width: {
          xs: '100%',
          sm: '80%',
          md: '60%',
        },
      }}
    >
      <TaskForm addTask={addTask}/>

      <TaskList tasks={tasksFiltered} toggleTaskCompletion={toggleTaskCompletion} activeFilter={activeFilter} />      

      <Actions activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </StyledPaper>
  )
}
