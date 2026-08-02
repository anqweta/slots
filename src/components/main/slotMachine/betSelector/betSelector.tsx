import styles from "./betSelector.module.scss"
import Bet from "./bet/bet";
import { useState } from "react";

interface BetItem {
    id: number;
    bet: number;
}

let bets: BetItem[] = [
    { id: 1, bet: 25 }, 
    { id: 2, bet: 50 },
    { id: 3,  bet: 100 },
    { id: 4,bet: 200}
]

interface BetSelectorProps {
    setCurrentBet: (betAmount: number) => void;
}

export default function BetSelector({ setCurrentBet }: BetSelectorProps) {
    
    const [activeId, setActiveId] = useState<number>(0);
    const selectBet = (id: number, betAmount: number): void => {
        setActiveId(id);
        setCurrentBet(betAmount);
    };
    
    return (
        <div className={styles.betSelector}>
            <span>BET</span>
            {bets.map((item, index) => (
                <Bet key={index} props={item} isActive={activeId === item.id} onClick={() => selectBet(item.id, item.bet)} />
            ))}
        </div>
    );
}
