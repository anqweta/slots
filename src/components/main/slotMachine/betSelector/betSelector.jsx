import "./betSelector.css"
import Bet from "./bet/bet";

let bets = [
    { bet: 25 }, 
    { bet: 50 },
    { bet: 100 },
    {bet: 200}
]

export default function BetSelector() {
    return (
        <div className="betSelector">
            <span>BET</span>
            {bets.map((item, index) => (
                <Bet key={index} props={item}/>
            ))}
        </div>
    );
}