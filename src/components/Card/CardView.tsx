import { Alert, Grid } from "@mui/material";
import { User } from "../../types/UserTypes";
import { UserCard } from "./UserCard";
import { memo, RefObject } from "react";
import isEqual from "lodash.isequal";

interface Props {
  users: User[];
  render: RefObject<number>;
}

export const CardView = memo(
  ({ users, render }: Props) => {
    render.current += 1;
    return (
      <Grid>
        <Grid direction="row" width="100%" container={true} spacing={2}>
          {users.map(({ name, email, address, id }) => (
            <UserCard name={name} email={email} address={address} key={id} />
          ))}
        </Grid>
        <Alert severity="info">
          The list re-rendered {render.current} time/s
        </Alert>
      </Grid>
    );
  },
  (o, n) => isEqual(o.users, n.users)
);

export default CardView;
