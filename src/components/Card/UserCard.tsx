import { Avatar, Card, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { User } from "../../types/UserTypes";
import { stringAvatar } from "../../utils/string-avatar";

const StyledCard = styled(Card)`
  width: 365px;
  padding: 2rem;
  border: 0.5px solid #cccccc73;
`;

export const UserCard = ({
  name,
  address,
  email,
}: Pick<User, "name" | "address" | "email">) => {
  return (
    <StyledCard elevation={0}>
      <Grid container={true} spacing={2}>
        <Avatar {...stringAvatar(name)} />
        <Grid>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography fontSize="12px" color="textSecondary">
            {email}
          </Typography>
          <Typography fontSize="12px" color="textSecondary">
            {address.city} {address.street}
          </Typography>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default Card;
