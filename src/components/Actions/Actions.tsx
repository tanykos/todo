import { Box, Button } from "@mui/material";
import { StyledSpan, StyledWrapper } from "./Actions.styled";
import { Dispatch } from "react";
import FilterButton from "../FilterButton";
import { TaskFilter } from "../../types";
import { filters, maxCompleted } from "../../constatnts";

interface ActionsProps {
  activeFilter: TaskFilter,
  setActiveFilter: Dispatch<React.SetStateAction<TaskFilter>>;
  completedCount: number;
};

export const Actions = ({ activeFilter, setActiveFilter, completedCount }: ActionsProps) => {
  const handleFilterClick = (filter: TaskFilter) => {
    setActiveFilter(filter);
  };

  const getCounter = () => {
    if (completedCount > maxCompleted) return `${maxCompleted}+`;
    return completedCount;
  }

  return (
    <StyledWrapper>
      <Box>
        <StyledSpan>{getCounter()}</StyledSpan> items left
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
