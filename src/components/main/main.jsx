import "./main.css";
import SlotMachine from "./slotMachine/slotMachine";

export default function Main({
  handleMoneyWin,
  money,
  handleMoney,
  onSpin,
  handlePercentWin,
  handleIcon,
  addStatisticElement,
}) {
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
