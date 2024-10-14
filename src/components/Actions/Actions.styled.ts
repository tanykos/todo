import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.65rem;
  border-top: 1px solid var(--border-color);
`;

export const StyledSpan = styled('span')`
  display: inline-block;
  min-width: 3ch;
  text-align: end;
`;
