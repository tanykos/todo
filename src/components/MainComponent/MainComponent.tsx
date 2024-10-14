import { StyledListWrapper, StyledPaper, StyledParagraph } from './MainComponent.styled';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';
import Actions from '../Actions';
import { useState } from 'react';
import { Task } from '../../types';

export const MainComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const addTask = (taskText: string) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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

      <StyledListWrapper>
        {!tasks.length ? 
          <StyledParagraph>The task list is empty.</StyledParagraph>
          :
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        }
      </StyledListWrapper>
      

      <Actions />
    </StyledPaper>
  )
}
