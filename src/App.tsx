import { SuspenseWithError } from "./components/SuspenseWithError";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Center } from "./components/Center";
import Home from "./modules/Home";

export const Main = styled(Box)`
  background: #ebebeb80;
  display: flex;
  justify-content: start;
  height: 100vh;
  padding: 1rem;
`;

export default function App() {
  return (
    <Main>
      <SuspenseWithError
        fallback={
          <Center>
            <CircularProgress size={30} />
          </Center>
        }
      >
        <Home />
      </SuspenseWithError>
    </Main>
  );
}
