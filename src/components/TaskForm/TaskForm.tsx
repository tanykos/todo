import { IconButton, InputBase } from "@mui/material";
import { StyledForm, StyledHeader } from "./TaskForm.styled";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
  addTask: (task: string) => void;
}

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTask = taskText.trim();
    if (trimmedTask) {
      addTask(trimmedTask);
      setTaskText('');
    }
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleFormSubmit}>
        <InputBase
          value={taskText}
          onChange={handleInputChange}
          sx={{ flex: 1 }}
          placeholder="What needs to be done?"
          inputProps={{ 'aria-label': 'input task', 'data-testid': 'add task input' }}
        />
        <IconButton 
          type="submit"
          disabled={!taskText.trim()}
          color="primary"
          sx={{ p: '6px' }} 
          aria-label="add task"
          data-testid='add task button'
        >
          <AddTaskIcon />
        </IconButton>
      </StyledForm>
    </StyledHeader>
  )
}
