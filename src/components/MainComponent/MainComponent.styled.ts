import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledListWrapper = styled(Box)`
  margin-bottom: var(--height-actions);
  overflow-Y: auto;
`;

export const StyledParagraph = styled('p')`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`;
