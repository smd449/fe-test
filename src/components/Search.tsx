import { TextField } from "@mui/material";
import { memo } from "react";

interface Props {
  setSearch: (key: string) => void;
}

export const Search = memo(
  ({ setSearch }: Props) => {
    return (
      <TextField
        size="small"
        placeholder="Search User"
        onChange={(event) => setSearch(event?.target?.value)}
        sx={{
          height: "fit-content",
          borderRadius: "10px",
          borderColor: "#cccccc73",
          borderWidth: ".5",
        }}
      />
    );
  },
  () => true
);
