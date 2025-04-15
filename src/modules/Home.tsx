import { Alert, CircularProgress, Grid } from "@mui/material";
import { StyledContainer } from "../components/Container";
import { Search } from "../components/Search";
import ToggleView from "../components/ToggleView";
import View from "../components/View";
import { useRef } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { Center } from "../components/Center";
import { useToggle } from "../hooks/useToggle";

export default function Home() {
  const { setViewType, viewType } = useToggle();
  const { isLoading, filteredData: data, setSearch, error } = useFetchUsers();

  const cardRender = useRef(0);
  const listRender = useRef(0);

  if (isLoading)
    return (
      <Center>
        <CircularProgress size={30} />
      </Center>
    );

  if (error) throw Error;

  return (
    <StyledContainer>
      <Grid>
        <Search setSearch={setSearch} />
        <ToggleView onToggle={setViewType} />
      </Grid>

      {Boolean(!data?.length) && (
        <Center>
          <Alert severity="info">There's nothing to see here</Alert>
        </Center>
      )}

      {!!data && (
        <View
          viewType={viewType}
          data={data}
          renderTrack={{ card: cardRender, list: listRender }}
        />
      )}
    </StyledContainer>
  );
}
