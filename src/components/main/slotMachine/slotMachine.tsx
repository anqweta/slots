import { useContext, useState } from "react";
import "./slotMachine.css";
import Dots from "./dots";
import type { RootState } from "../../../app/store";
import ReelsBoard from "./reelsBoard/reelsBoard";
import BetSelector from "./betSelector/betSelector";
import { SYMBOLS } from "../../../constants";
import { calcMoneyWin } from "../../../utils/helper";
import StatisticContext from "../../../providers/StatisticContext";
import { handleMoneyWin, handleIcon, handlePercentWin, handleMoney, onSpin } from "../../../features/moneyLogic/moneyLogicSlice";
import { useSelector } from "react-redux";
import { moneySelector } from "../../../features/moneyLogic/moneyLogicSlice";
interface SpanClassItem {
  class: string;
}

let spanClass: SpanClassItem[] = [
  { class: "span-red" },
  { class: "span-yellow" },
  { class: "span-blue" },
];
let countWin: number = 0;

export default function SlotMachine() {
  const money = useSelector(moneySelector);
  const [currentBet, setCurrentBet] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isReel, setReel] = useState<number[]>([0, 0, 0]);
  const [isWin, setWin] = useState<boolean>(false);
  const { addStatisticElement } = useContext(StatisticContext);
  const spinClick = (): void => {
    setWin(false);
    if (money < currentBet) {
      alert("Денег нет!");
      return;
    }

    if (currentBet === 0) {
      return;
    }

    handleMoney({amount: currentBet});

    if (isSpinning) {
      return;
    }

    const findIcon = (): number => Math.floor(Math.random() * SYMBOLS.length);

    const newReel: number[] = Array.from({ length: 3 }, () => findIcon());

    console.log("ІНДЕКСИ ІКОНОК: " + newReel);

    const countSame: Map<number, number> = new Map<number, number>();

    for (const item of newReel) {
      countSame.set(item, (countSame.get(item) || 0) + 1);
    }

    console.log(countSame);

    setReel(newReel);

    setIsSpinning(true);

    if (onSpin) {
      onSpin();
    }
    let result: string[] = [
      SYMBOLS[newReel[0]].icon,
      SYMBOLS[newReel[1]].icon,
      SYMBOLS[newReel[2]].icon,
    ];
    setTimeout(() => {
      handleIcon(
        {firstIcon :SYMBOLS[newReel[0]].icon,
        secondIcon:   SYMBOLS[newReel[1]].icon,
        thirdIcon: SYMBOLS[newReel[2]].icon,}
      );
      let moneyWinStat: number = 0;
      setIsSpinning(false);
      const isWinStat: boolean = countSame.size <= 2;
      console.log(isWinStat + "ЧИ Є ПЕРЕМОГА");
      if (isWinStat) {
        setWin(isWinStat);
        const { moneyWin } = calcMoneyWin(currentBet, countSame, SYMBOLS);
        console.log("Ви вийграли, ФІНАЛЬНА кількість грошей: " + moneyWin);
        handleMoneyWin({moneyWin: moneyWin});
        handleMoney({amount: -moneyWin});
        moneyWinStat = moneyWin;
        countWin++;
      }
      const balanceStat: number = money - currentBet + moneyWinStat;
      console.log("КІЛЬКІСТЬ ПЕРЕМОГ: " + countWin);
      handlePercentWin({countWin: countWin});
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
