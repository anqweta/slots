import "./main.css";
import SlotMachine from "./slotMachine/slotMachine";

export default function Main({ money, handleMoney, onSpin }) {
  return (
    <main>
      <SlotMachine money={money} handleMoney={handleMoney} onSpin={onSpin} />
    </main>
  );
}
