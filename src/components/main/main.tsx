import "./main.css";
import SlotMachine from "./slotMachine/slotMachine";

interface MainProps {
  handleMoneyWin: (moneyWin: number) => void;
  money: number;
  handleMoney: (amount: number) => number;
  onSpin: () => void;
  handlePercentWin: (countWin: number) => void;
  handleIcon: (firstIcon: string, secondIcon: string, thirdIcon: string) => void;
  addStatisticElement: (result: boolean, icon: string[], bet: number, moneyWin: number, money: number) => void;
}

export default function Main({
  handleMoneyWin,
  money,
  handleMoney,
  onSpin,
  handlePercentWin,
  handleIcon,
  addStatisticElement,
}: MainProps) {
  return (
    <main>
      <SlotMachine
        handleMoneyWin={handleMoneyWin}
        money={money}
        handleMoney={handleMoney}
        onSpin={onSpin}
        handlePercentWin={handlePercentWin}
        handleIcon={handleIcon}
        addStatisticElement={addStatisticElement}
      />
    </main>
  );
}
