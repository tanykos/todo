import { Box, Button } from "@mui/material";
import { StyledWrapper } from "./Actions.styled";
import { useState } from "react";
import FilterButton from "../FilterButton";
import { FILTERS } from "../../constatnts";

const filters = [FILTERS.ALL, FILTERS.ACTIVE, FILTERS.COMPLETED];

export const Actions = () => {
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);


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
