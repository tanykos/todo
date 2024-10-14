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
  const [completedCount, setCompletedCount] = useState(0);
  
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
                        );

    const completedTasksCount = tasksUpdated.reduce(
      (count, task) => (task.completed ? count + 1 : count),
      0
    ); 

    setCompletedCount(completedTasksCount);                   
    setTasks(tasksUpdated);
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
    setCompletedCount(0);
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

      <TaskList 
        tasks={tasksFiltered} 
        toggleTaskCompletion={toggleTaskCompletion} 
        activeFilter={activeFilter} 
      />      

      <Actions 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        completedCount={completedCount} 
        clearCompletedTasks={clearCompletedTasks}
      />
    </StyledPaper>
  )
}
