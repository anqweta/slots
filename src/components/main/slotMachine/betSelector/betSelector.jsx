import "./betSelector.css"
import Bet from "./bet/bet";
import { useState } from "react";

let bets = [
    { id: 1, bet: 25 }, 
    { id: 2, bet: 50 },
    { id: 3,  bet: 100 },
    { id: 4,bet: 200}
]



export default function BetSelector({ setCurrentBet }) {
    
    const [activeId, setActiveId] = useState(0);

   /* const selectBet = (event) => {

        const selectButton = event.target.closest('button');

        if (!selectButton) {
            return;
        }

        setActiveId(selectButton.event.target.id);

        if (activeId === selectButton.id) {
            selectButton.classList.add('active');
        }

        const selectedBet = +selectButton.textContent;

        setCurrentBet(selectedBet);

    }; */

    const selectBet = (id, betAmount) => {
        setActiveId(id);
        setCurrentBet(betAmount);
    };
    
    return (
        <div className="betSelector">
            <span>BET</span>
            {bets.map((item, index) => (
                <Bet key={index} props={item} isActive={activeId === item.id} onClick={() => selectBet(item.id, item.bet)} />
            ))}
        </div>
    );
}