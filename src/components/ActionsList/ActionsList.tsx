import { Box, Button } from "@mui/material";
import { StyledWrapper } from "./ActionsList.styled";
import { useState } from "react";
import FilterButton from "../FilterButton";

export const ActionsList = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Active', 'Completed'];

  const handleFilterClick = (filter: string) => {
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
