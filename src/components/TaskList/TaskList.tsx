import { Checkbox, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Task } from "../../types";
import { StyledListItem } from "./TaskList.styled";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
}

export const TaskList = ({ tasks, toggleTaskCompletion }: TaskListProps) => {
  return (
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
  )
}
