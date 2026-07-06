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

export default function SlotMachine({ handleMoney, onSpin }) {
  const [currentBet, setCurrentBet] = useState(0);
  const [moneyWin, setMoneyWin] = useState(0);

  const [isMult, setIsMult] = useState(0);

  const [isSpinning, setIsSpinning] = useState(false);
  const [isReel, setReel] = useState([0, 0, 0]);

  const spinClick = () => {
    if (currentBet === 0) {
      return;
    }

    handleMoney(currentBet);

    if (isSpinning) {
      return;
    }

    const newReel = [
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
    ];

    const countSame = new Map();

    for (const item of newReel) {
      countSame.set(item, (countSame.get(item) || 0) + 1);
    }

    /*let maxKey = null;
      let maxValue = 0;
      let currentMult;
      if (countSame.size <= 2) {
        // setIsWin(true);
        for (const [icon, count] of countSame) {
          if (count > maxValue) {
            maxValue = count;
            maxKey = icon;
          }
        }
        console.log("НОМЕР ІКОНКИ " + maxKey);
        if (countSame.size === 1) {
          currentMult = SYMBOLS[maxKey].firstMult;
          console.log("Ви вийграли, ваша множник: " + currentMult);
        } else {
          currentMult = SYMBOLS[maxKey].secondMult;
          console.log("Ви вийграли, ваша множник: " + currentMult);
        }
        console.log("Ви вийграли, ваша множник: " + isMult);
        const moneyWin = calcMoneyWin(currentBet, currentMult);
        console.log("Ви вийграли, кількість грошей: " + moneyWin);
        handleMoney(moneyWin);
        setIsMult(currentMult);
        setMoneyWin(moneyWin);
      } else {
        setIsMult(0);
      } */

    if (countSame.size <= 2) {
      // setIsWin(true);
      const result = calcMoneyWin(currentBet, countSame, SYMBOLS);
      console.log("Ви вийграли, ФІНАЛЬНА кількість грошей: " + result.moneyWin);
      handleMoney(moneyWin);
      setIsMult(result.currentMult);
      setMoneyWin(-result.moneyWin);
    } else {
      setIsMult(0);
    }

    console.log(countSame);

    setReel(newReel);

    setIsSpinning(true);

    if (onSpin) {
      onSpin();
    }

    setTimeout(() => {
      setIsSpinning(false);
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
      <ReelsBoard positions={isReel} isSpinning={isSpinning} />
      <BetSelector setCurrentBet={setCurrentBet} />
      <button onClick={spinClick} disabled={isSpinning} className="button-spin">
        SPIN
      </button>
    </div>
  );
}
