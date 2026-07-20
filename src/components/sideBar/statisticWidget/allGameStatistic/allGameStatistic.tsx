import "./allGameStatistic.css";
import { StatisticItem } from "../../../../App";

interface AllGameStatisticProps {
  props: StatisticItem;
}

export default function AllGameStatistic({ props }: AllGameStatisticProps) {
  if (props.numberGame === 0) {
    return;
  }
  return (
    <div
      className={`item-stat ${props.result === "win" ? "item-green" : "item-red"}`}
    >
      <p>
        Game Number: <span>{props.numberGame}</span>
      </p>
      <p>
        Result: <span>{props.result}</span>
      </p>
      <p>
        Result Icon: <span>{props.icon}</span>
      </p>
      <p>
        Bet: <span>{props.bet}</span>
      </p>
      <p>
        Money Win: <span>{props.moneyWin}</span>
      </p>
      <p>
        Balance: <span>{props.money}</span>
      </p>
    </div>
  );
}
