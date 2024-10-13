import { StyledPaper } from './MainComponent.styled';
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
import ActionsList from '../ActionsList';

export const MainComponent = () => {
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
      <TaskInput />

      <TaskList />

      <ActionsList />
    </StyledPaper>
  )
}
