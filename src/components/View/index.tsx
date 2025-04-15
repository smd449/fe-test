import { ViewType } from "../../types/ViewTypes";
import { lazy, RefObject } from "react";
import { User } from "../../types/UserTypes";

const TableContainer = lazy(() => import("../Table/TableContainer"));
const CardView = lazy(() => import("../Card/CardView"));

interface Props {
  renderTrack: {
    list: RefObject<number>;
    card: RefObject<number>;
  };
  data: User[];
  viewType: ViewType;
}

export const View = ({ renderTrack, data, viewType }: Props) => {
  if (viewType === ViewType.CARD && data.length)
    return <CardView users={data} render={renderTrack.card} />;

  if (viewType === ViewType.LIST && data.length)
    return <TableContainer users={data} render={renderTrack.list} />;
};

export default View;
