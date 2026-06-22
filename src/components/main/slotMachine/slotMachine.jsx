import { useState } from "react";
import "./slotMachine.css";
import Dots from "./dots";
import ReelsBoard from "./reelsBoard/reelsBoard";
import BetSelector from "./betSelector/betSelector";

let spanClass = [
    { class: "span-red" },
    { class: "span-yellow" },
    { class: "span-blue" },
];

export default function SlotMachine({ onSpin }) {

    const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣']
    
    const [isSpinning, setIsSpinning] = useState(false);
    const [ isReel, setReel ] = useState([0, 0, 0]);


    const spinClick = () => {
        
        if (isSpinning) {
            return;
        }

        const newReel = [
           Math.floor(Math.random() * symbols.length) * 100,
            Math.floor(Math.random() * symbols.length) * 100,
            Math.floor(Math.random()* symbols.length) * 100
        ]

        setReel(newReel);

        setIsSpinning(true);

        if (onSpin) {
            onSpin();
        }

        setTimeout(() => {
            setIsSpinning(false);

        }, 2000)

    }

    return (
        <div className="slotMachine">
            <h2 className="title">
                {spanClass.map((item, index) => (
                    <Dots key={index} props={item} />
                ))}LUCKY SPIN {spanClass.map((item, index) => (
                    <Dots key={index} props={item} />
                ))}
            </h2>
            <ReelsBoard positions={isReel} isSpinning={isSpinning} />
            <BetSelector/>
            <button onClick={spinClick} disabled={isSpinning} className="button-spin">
                SPIN
            </button>

        </div>
    )
}