import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Avatar, Box } from "@mui/material";
import { stringAvatar } from "../../utils/string-avatar";
import { User } from "../../types/UserTypes";
import styled from "styled-components";

export const StyledCell = styled(TableCell)``;

export const TableRowComponent = ({ user }: { user: User }) => {
  return (
    <TableRow key={user.name}>
      <StyledCell size="small" align="left">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar {...stringAvatar(user.name)} />
          {user.name}
        </Box>
      </StyledCell>
      <StyledCell size="small" align="left">
        {user.email.toLowerCase()}
      </StyledCell>
      <StyledCell
        size="small"
        align="left"
        sx={{
          textTransform: "lowercase",
        }}
      >
        {user.address.city}, {user.address.street}, {user.address.zipcode}
      </StyledCell>
    </TableRow>
  );
};
