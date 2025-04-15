import { Alert, TableContainer as Container } from "@mui/material";
import { RefObject } from "react";
import styled from "styled-components";
import { User } from "../../types/UserTypes";
import UsersTable from "./UsersTable";

interface Props {
  users: User[];
  render: RefObject<number>;
}

const StyledContainer = styled(Container)`
  overflow: hidden;
`;

export const TableContainer = ({ users, render }: Props) => {
  render.current += 1;
  return (
    <StyledContainer>
      <UsersTable users={users} />
      <Alert severity="info">
        The table re-rendered {render.current} time/s
      </Alert>
    </StyledContainer>
  );
};

export default TableContainer;
