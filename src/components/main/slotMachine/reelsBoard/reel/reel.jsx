import "./reel.css";

const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣'];

const double_symbols = [...symbols, ...symbols];

export default function Reel({isSpinning}) {
    return (
        <div className="reel">
             <div className={`reel__tape ${isSpinning ? 'spinning' : ''}`}>
            {double_symbols.map((symbol, index) =>
                <div className="reel__item" key={index}>
                    {symbol}
                </div>
            )}

        </div>
       </div>
    );
}