import "./main.css";
import SlotMachine from "./slotMachine/slotMachine"

export default function Main({money, setMoney, onSpin}) {
            return (
                <main>
                    <SlotMachine money={money} setMoney={setMoney} onSpin={onSpin}/>
                </main>
            )
} 