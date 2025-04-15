import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { memo } from "react";
import { User } from "../../types/UserTypes";
import isEqual from "lodash.isequal";
import { TableRowComponent } from "./TableRow";
import { TableHeadComponent } from "./TableHead";

export const UsersTable = memo(
  ({ users }: { users: User[] | undefined }) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="Users table" sx={{ overflow: "auto" }}>
          <TableHeadComponent />
          <TableBody>
            {users?.map((user) => (
              <TableRowComponent user={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  (o, n) => isEqual(o.users, n.users)
);

export default UsersTable;
