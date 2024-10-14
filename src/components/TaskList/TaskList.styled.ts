import styled from "@emotion/styled";
import { Box, ListItem } from "@mui/material";

export const StyledListItem = styled(ListItem)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
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
