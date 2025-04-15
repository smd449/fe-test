import { getUsers } from "../api";
import { useEffect, useMemo, useReducer } from "react";
import { initialState, reducer } from "./helpers/reducers";
import { useDebounceCallback } from "./useDebouncedCallback";

export const useFetchUsers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getUsers()
      .then(({ data }) => {
        dispatch({ type: "SET_ALL", payload: { data, isLoading: false } });
      })
      .catch((error) =>
        dispatch({ payload: { error, isLoading: false }, type: "SET_ALL" })
      );
  }, []);

  const setSearch = useDebounceCallback((key) => {
    dispatch({
      payload: key,
      type: "SET_SEARCH",
    });
  }, 300);

  const filteredData = useMemo(() => {
    if (state.data) {
      if (!state.search) return state.data;

      if (state?.search) {
        const filtered = state.data?.filter(({ name }) =>
          name.toLowerCase().includes(state?.search?.toLocaleLowerCase() || "")
        );

        return filtered || [];
      }
    }
  }, [state.data, state.search]);

  return { ...state, setSearch, filteredData };
};
