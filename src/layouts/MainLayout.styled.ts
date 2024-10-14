import styled from '@emotion/styled';
import { AppBar, Container } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: `var(--text-secondary)`,
});

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  padding: '1.5rem 1.5rem 2rem 1.5rem',
  height: `calc(100vh - var(--height-header))`
});
