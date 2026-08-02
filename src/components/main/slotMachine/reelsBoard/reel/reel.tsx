import styles from "./reel.module.scss";
import { SYMBOLS, SymbolItem } from "@/constants";

const tapeSymbols: SymbolItem[] = Array(12).fill(SYMBOLS).flat();
const EXTRA_SPINS: number = 50;

interface ReelProps {
  stopIndex: number;
  isSpinning: boolean;
  delay: number;
}

export default function Reel({ stopIndex, isSpinning, delay }: ReelProps) {
  const ICON_HEIGHT: number = 100;
  const OFFSET: number = 100;
  const safeStopIndex: number = SYMBOLS.length + stopIndex;
  const stopPosition: number = safeStopIndex * ICON_HEIGHT - OFFSET;
  const spinPosition: number = (EXTRA_SPINS + safeStopIndex) * ICON_HEIGHT - OFFSET;
  return (
    <div className={styles.reel}>
      <div
        className={`${styles.reel__tape} ${isSpinning ? styles.spinning : ""}`}
        style={{
          transform: `translateY(-${isSpinning ? spinPosition : stopPosition}px)`,
          transitionDelay: isSpinning ? `${delay}s` : "0s",
        }}
      >
        {tapeSymbols.map((symbol, index) => (
          <div className={styles.reel__item} key={index}>
            {symbol.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
