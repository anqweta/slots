import "./reel.css";
import { SYMBOLS } from "../../../../../constants";

   // const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣'];

    const doubleSymbols = [...SYMBOLS, ...SYMBOLS];

    export default function Reel({stopPosition, isSpinning}) {
        return (
            <div className="reel">
                <div className={`reel__tape ${isSpinning ? 'spinning' : ''}`}
                   style={!isSpinning ? { transform: `translateY(-${stopPosition}px)`} : {}}>
                {doubleSymbols.map((symbol, index) =>
                    <div className="reel__item" key={index}>
                        {symbol.icon}
                    </div>
                )}

            </div>
        </div>
        );
    }