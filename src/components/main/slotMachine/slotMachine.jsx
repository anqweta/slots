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

export default function SlotMachine({ money, handleMoney, onSpin }) {
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

    setTimeout(() => {
      setIsSpinning(false);
      const isWin = countSame.size <= 2;
      if (isWin) {
        setWin(isWin);
        const { moneyWin } = calcMoneyWin(currentBet, countSame, SYMBOLS);
        console.log("Ви вийграли, ФІНАЛЬНА кількість грошей: " + moneyWin);
        handleMoney(-moneyWin);
      }
    }, 2000);
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
