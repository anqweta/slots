import "./reel.css";
import { SYMBOLS_RENDER } from "../../../../../constants";

   // const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣'];

    const double_symbols = [...SYMBOLS_RENDER, ...SYMBOLS_RENDER];

    export default function Reel({stopPosition, isSpinning}) {
        return (
            <div className="reel">
                <div className={`reel__tape ${isSpinning ? 'spinning' : ''}`}
                   style={!isSpinning ? { transform: `translateY(-${stopPosition}px)`} : {}}>
                {double_symbols.map((symbol, index) =>
                    <div className="reel__item" key={index}>
                        {symbol}
                    </div>
                )}

            </div>
        </div>
        );
    }