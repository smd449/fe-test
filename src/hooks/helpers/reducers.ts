import { AxiosError } from "axios";
import { User } from "../../types/UserTypes";

export interface InitialState {
  data: User[] | [];
  isLoading: boolean;
  error: null | AxiosError;
  search: null | string;
}

export type Action =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: null | AxiosError }
  | { type: "SET_ALL"; payload: Partial<InitialState> };

export const initialState: InitialState = {
  data: [],
  isLoading: true,
  error: null,
  search: null,
};

export const reducer = (state: InitialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USERS":
      return { ...state, data: payload };
    case "SET_LOADING":
      return { ...state, isLoading: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_ALL":
      return {
        ...state,
        ...payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
