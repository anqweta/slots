import "./sideBar.css";
import StatisticWidget from "./statisticWidget/statisticWidget";
import { StatisticItem } from "../../App";

/* interface SideBarProps {
  percentWin: number;
  moneyWin: number;
  gameCount: number;
  icon: number[] | string[];
  statistic: StatisticItem[];
} */

export default function SideBar() {
  return (
    <aside>
      <StatisticWidget
      />
    </aside>
  );
}
