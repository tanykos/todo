import React from 'react';
import { AppBar, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: `var(--text-secondary)`,
});

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
});

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
