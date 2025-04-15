import { TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
import { StyledCell } from "./TableRow";

const StyleTableHead = styled(TableHead)``;

export const TableHeadComponent = () => (
  <StyleTableHead
    sx={{
      background: "#",
    }}
  >
    <TableRow>
      <StyledCell size="small" align="left" sx={{ fontWeight: "bold" }}>
        Name
      </StyledCell>
      <StyledCell size="small" align="left" sx={{ fontWeight: "bold" }}>
        Email
      </StyledCell>
      <StyledCell size="small" align="left" sx={{ fontWeight: "bold" }}>
        Address
      </StyledCell>
    </TableRow>
  </StyleTableHead>
);
