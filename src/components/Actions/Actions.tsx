import { Box, Button } from "@mui/material";
import { StyledWrapper } from "./Actions.styled";
import { Dispatch } from "react";
import FilterButton from "../FilterButton";
import { TaskFilter } from "../../types";
import { filters } from "../../constatnts";

interface ActionsProps {
  activeFilter: TaskFilter,
  setActiveFilter: Dispatch<React.SetStateAction<TaskFilter>>;
};

export const Actions = ({ activeFilter, setActiveFilter }: ActionsProps) => {
  const handleFilterClick = (filter: TaskFilter) => {
    setActiveFilter(filter);
  };
  
  return (
    <StyledWrapper>
      <Box>
        0 items left
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
