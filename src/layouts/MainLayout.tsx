import { ReactNode } from 'react';
import { StyledAppBar, StyledContainer } from './MainLayout.styled';
import { Typography } from '@mui/material';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledAppBar position="static" color='transparent'>
        <Typography variant="h1">todos</Typography>
      </StyledAppBar>
      <StyledContainer>
        {children}
      </StyledContainer>
    </>
  );
};
