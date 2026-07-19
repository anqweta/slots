import "./sideBar.css";
import StatisticWidget from "./statisticWidget/statisticWidget";

export default function SideBar({
  percentWin,
  moneyWin,
  gameCount,
  icon,
  statistic,
}) {
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
