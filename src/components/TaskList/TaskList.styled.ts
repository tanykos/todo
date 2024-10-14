import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

export const StyledListItem = styled(ListItem)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
`;
