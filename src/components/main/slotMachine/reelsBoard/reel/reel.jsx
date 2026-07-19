import "./reel.css";
import { SYMBOLS } from "../../../../../constants";

const tapeSymbols = Array(12).fill(SYMBOLS).flat();
const EXTRA_SPINS = 50;

export default function Reel({ stopIndex, isSpinning, delay }) {
  const ICON_HEIGHT = 100;
  const OFFSET = 100;
  const safeStopIndex = SYMBOLS.length + stopIndex;
  const stopPosition = safeStopIndex * ICON_HEIGHT - OFFSET;
  const spinPosition = (EXTRA_SPINS + safeStopIndex) * ICON_HEIGHT - OFFSET;
  return (
    <div className="reel">
      <div
        className={`reel__tape ${isSpinning ? "spinning" : ""}`}
        style={{
          // Коли isSpinning = true, їдемо на spinPosition. Коли false - скидаємо на stopPosition
          transform: `translateY(-${isSpinning ? spinPosition : stopPosition}px)`,

          // Додаємо затримку тільки під час обертання (щоб скидання було миттєвим)
          transitionDelay: isSpinning ? `${delay}s` : "0s",
        }}
      >
        {tapeSymbols.map((symbol, index) => (
          <div className="reel__item" key={index}>
            {symbol.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
