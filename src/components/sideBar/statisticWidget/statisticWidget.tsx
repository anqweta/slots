import { useSelector } from "react-redux";

import InfoItem from "./infoItem/infoItem";
import AllGameStatistic from "./allGameStatistic/allGameStatistic";
import styles from "./statisticWidget.module.scss";
import { gameCountSelector, iconSelector, percentWinSelector, statisticSelector } from "@/features/gameStatistic/selector";

interface StatisticInfoItem {
  title: string;
  number: number | string | number[] | string[];
}

export default function StatisticWidget() {

  const gameCount = useSelector(gameCountSelector);
  const percentWin = useSelector(percentWinSelector);
  const icon = useSelector(iconSelector);
  const statistic = useSelector(statisticSelector);

  let statisticInfo: StatisticInfoItem[] = [
    { title: "Counf of game: ", number: gameCount },
    // { title: "Last win: ", number: moneyWin },
    { title: "Total win: ", number: percentWin + "%" },
    { title: "Icon: ", number: icon },
  ];

  return (
    <div className={styles.statistic}>
      <h2>STATISTIC</h2>
      <div className={styles.statistic__info}>
        {statisticInfo.map((item, index) => (
          <InfoItem key={index} props={item} />
        ))}
      </div>
      {statistic.map((item, index) => (
        <AllGameStatistic key={index} props={item} />
      ))}
    </div>
  );
}
