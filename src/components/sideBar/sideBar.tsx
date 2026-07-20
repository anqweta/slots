import "./sideBar.css";
import StatisticWidget from "./statisticWidget/statisticWidget";
import { StatisticItem } from "../../App";

interface SideBarProps {
  percentWin: number;
  moneyWin: number;
  gameCount: number;
  icon: number[] | string[];
  statistic: StatisticItem[];
}

export default function SideBar({
  percentWin,
  moneyWin,
  gameCount,
  icon,
  statistic,
}: SideBarProps) {
  return (
    <aside>
      <StatisticWidget
        percentWin={percentWin}
        moneyWin={moneyWin}
        gameCount={gameCount}
        icon={icon}
        statistic={statistic}
      />
    </aside>
  );
}
