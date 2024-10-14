import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledUnderPaper = styled(Paper)`
  height: 10px;
  position: absolute;
  bottom: -6px;
  right: 1%;
  left: 1%;
  z-index: -1;
  &:nth-of-type(2) {
    bottom: -12px;
    right: 2%;
    left: 2%;
    z-index: -2;
  }
`;
