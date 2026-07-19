import InfoItem from "./infoItem/infoItem";
import AllGameStatistic from "./allGameStatistic/allGameStatistic";
import "./statisticWidget.css";

export default function StatisticWidget({
  percentWin,
  moneyWin,
  gameCount,
  icon,
  statistic,
}) {
  let statisticInfo = [
    { title: "Counf of game: ", number: gameCount },
    // { title: "Last win: ", number: moneyWin },
    { title: "Total win: ", number: percentWin + "%" },
    { title: "Icon: ", number: icon },
  ];

  return (
    <div className="statistic">
      <h2>STATISTIC</h2>
      <div className="statistic__info">
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
