import Switch from "@mui/material/Switch";
import { ChangeEvent, memo } from "react";
import { ViewType } from "../types/ViewTypes";

interface Props {
  onToggle: (type: ViewType) => void;
}

export const ToggleView = memo(
  ({ onToggle }: Props) => {
    const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
      const viewType = event.target.checked ? ViewType.CARD : ViewType.LIST;
      onToggle(viewType);
      return;
    };
    return (
      <Switch aria-label="toggle view" defaultChecked onChange={handleToggle} />
    );
  },
  () => true
);

export default ToggleView;
