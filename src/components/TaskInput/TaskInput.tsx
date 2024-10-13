import { IconButton, InputBase } from "@mui/material";
import { StyledHeader } from "./TaskInput.styled";
import AddTaskIcon from '@mui/icons-material/AddTask';

export const TaskInput = () => {
  return (
    <StyledHeader>
      <InputBase
        sx={{ flex: 1 }}
        placeholder="What needs to be done?"
        inputProps={{ 'aria-label': 'input task' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="add task">
        <AddTaskIcon />
      </IconButton>
    </StyledHeader>
  )
}
