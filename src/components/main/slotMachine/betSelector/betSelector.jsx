import "./betSelector.css"
import Bet from "./bet/bet";

let bets = [
    { bet: 25 }, 
    { bet: 50 },
    { bet: 100 },
    {bet: 200}
]



export default function BetSelector({setCurrentBet}) {

    const selectBet = (event) => {

        const selectButton = event.target.closest('button');

        if (!selectButton) {
            return;
        }

        const selectedBet = +selectButton.textContent;

        setCurrentBet(selectedBet);

    };
    
    return (
        <div onClick={selectBet} className="betSelector">
            <span>BET</span>
            {bets.map((item, index) => (
                <Bet key={index} props={item}/>
            ))}
        </div>
    );
}