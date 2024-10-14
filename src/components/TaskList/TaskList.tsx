import { Checkbox, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Task, TaskFilter } from "../../types";
import { StyledListItem, StyledListWrapper, StyledParagraph } from "./TaskList.styled";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  activeFilter: TaskFilter;
}

export const TaskList = ({ tasks, toggleTaskCompletion, activeFilter }: TaskListProps) => {
  const renderMessage = () => {
    let message: string;

    switch (activeFilter) {
      case (TaskFilter.Active):
        message = 'There are no active tasks.';
        break;
      case (TaskFilter.Completed):
        message = 'There are no completed tasks.';
        break;
      default:
        message = 'The task list is empty.';
    }

    return message;
  };

  return (
    <StyledListWrapper>
        {!tasks.length ? 
          <StyledParagraph>{renderMessage()}</StyledParagraph>
          :
          <List sx={{ width: '100%' }}>
            {tasks.map((task) => (
              <StyledListItem key={task.id} disablePadding>
              <ListItemButton role={undefined} onClick={() => toggleTaskCompletion(task.id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={`${task.text}`} sx={{ wordWrap: 'break-word' }} />
              </ListItemButton>
            </StyledListItem>
            ))}
          </List>
        }
    </StyledListWrapper>
  )
}
