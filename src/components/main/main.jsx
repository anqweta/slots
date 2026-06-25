import "./main.css";
import SlotMachine from "./slotMachine/slotMachine"

export default function Main({handleMoney, onSpin}) {
            return (
                <main>
                    <SlotMachine handleMoney={handleMoney} onSpin={onSpin}/>
                </main>
            )
} 