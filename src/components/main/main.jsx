import "./main.css";
import SlotMachine from "./slotMachine/slotMachine"

export default function Main({onSpin}) {
            return (
                <main>
                    <SlotMachine onSpin={onSpin}/>
                </main>
            )
} 