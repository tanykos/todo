import { Box, Button } from "@mui/material";
import { StyledSpan, StyledWrapper } from "./Actions.styled";
import { Dispatch } from "react";
import FilterButton from "../FilterButton";
import { TaskFilter } from "../../types";
import { filters, maxCompleted } from "../../constants";

interface ActionsProps {
  activeFilter: TaskFilter,
  setActiveFilter: Dispatch<React.SetStateAction<TaskFilter>>;
  activeCount: number;
  completedCount: number;
  clearCompletedTasks: () => void;
};

export const Actions = ({ activeFilter, setActiveFilter, activeCount, completedCount, clearCompletedTasks }: ActionsProps) => {
  const handleFilterClick = (filter: TaskFilter) => {
    setActiveFilter(filter);
  };

  const getCounter = () => {
    if (activeCount > maxCompleted) return `${maxCompleted}+`;
    return activeCount;
  }

  return (
    <StyledWrapper
      sx={{
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
    >
      <Box>
        <StyledSpan data-testid='task counter'>{getCounter()}</StyledSpan> items left
      </Box>
      <Box sx={{ display: 'flex', gap: '0.5rem'}} >
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </Box>
      <Box>
        <Button 
          onClick={clearCompletedTasks}
          disabled={!completedCount}
          variant="text"
          color="secondary"
          size="small" 
          sx={{ textTransform: 'none' }}
        >
          Clear completed
        </Button>
      </Box>
    </StyledWrapper>
  )
}
