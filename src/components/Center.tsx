import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const Center = ({ children }: PropsWithChildren) => {
  return (
    <Box display="flex" width="100%" justifyContent="center" mt={10}>
      {children}
    </Box>
  );
};
