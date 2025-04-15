import { useState } from "react";
import { ViewType } from "../types/ViewTypes";
import { useDebounceCallback } from "./useDebouncedCallback";

export const useToggle = () => {
  const [viewType, setViewType] = useState(ViewType.CARD);

  const _setViewType = useDebounceCallback(setViewType, 0);
  return {
    viewType,
    setViewType: _setViewType,
  };
};
