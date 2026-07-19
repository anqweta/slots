import { useState } from "react";
import "./slotMachine.css";
import Dots from "./dots";
import ReelsBoard from "./reelsBoard/reelsBoard";
import BetSelector from "./betSelector/betSelector";
import { SYMBOLS } from "../../../constants";
import { calcMoneyWin } from "../../../utils/helper";

let spanClass = [
  { class: "span-red" },
  { class: "span-yellow" },
  { class: "span-blue" },
];
let countWin = 0;

export default function SlotMachine({
  handleMoneyWin,
  money,
  handleMoney,
  onSpin,
  handlePercentWin,
  handleIcon,
  addStatisticElement,
}) {
  const [currentBet, setCurrentBet] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isReel, setReel] = useState([0, 0, 0]);
  const [isWin, setWin] = useState(false);

  const spinClick = () => {
    setWin(false);
    if (money < currentBet) {
      alert("Денег нет!");
      return;
    }

    if (currentBet === 0) {
      return;
    }

    handleMoney(currentBet);

    if (isSpinning) {
      return;
    }

    const findIcon = () => Math.floor(Math.random() * SYMBOLS.length);

    const newReel = Array.from({ length: 3 }, () => findIcon());

    console.log("ІНДЕКСИ ІКОНОК: " + newReel);

    const countSame = new Map();

    for (const item of newReel) {
      countSame.set(item, (countSame.get(item) || 0) + 1);
    }

    console.log(countSame);

    setReel(newReel);

    setIsSpinning(true);

    if (onSpin) {
      onSpin();
    }

    //let betStat = currentBet;
    let result = [
      SYMBOLS[newReel[0]].icon,
      SYMBOLS[newReel[1]].icon,
      SYMBOLS[newReel[2]].icon,
    ];
    setTimeout(() => {
      handleIcon(
        SYMBOLS[newReel[0]].icon,
        SYMBOLS[newReel[1]].icon,
        SYMBOLS[newReel[2]].icon,
      );
      let moneyWinStat = 0;
      setIsSpinning(false);
      const isWinStat = countSame.size <= 2;
      console.log(isWinStat + "ЧИ Є ПЕРЕМОГА");
      if (isWinStat) {
        setWin(isWinStat);
        const { moneyWin } = calcMoneyWin(currentBet, countSame, SYMBOLS);
        console.log("Ви вийграли, ФІНАЛЬНА кількість грошей: " + moneyWin);
        handleMoneyWin(moneyWin);
        handleMoney(-moneyWin);
        moneyWinStat = moneyWin;
        countWin++;
      }
      const balanceStat = money - currentBet + moneyWinStat;
      console.log("КІЛЬКІСТЬ ПЕРЕМОГ: " + countWin);
      handlePercentWin(countWin);
      addStatisticElement(
        isWinStat,
        result,
        currentBet,
        moneyWinStat,
        balanceStat,
      );
    }, 5200);

    console.log(isWin + "RESULT GAME");
  };

  return (
    <div className="slotMachine">
      <h2 className="title">
        {spanClass.map((item, index) => (
          <Dots key={index} props={item} />
        ))}
        LUCKY SPIN{" "}
        {spanClass.map((item, index) => (
          <Dots key={index} props={item} />
        ))}
      </h2>
      <ReelsBoard positions={isReel} isSpinning={isSpinning} isWin={isWin} />
      <BetSelector setCurrentBet={setCurrentBet} />
      <button onClick={spinClick} disabled={isSpinning} className="button-spin">
        SPIN
      </button>
    </div>
  );
}
