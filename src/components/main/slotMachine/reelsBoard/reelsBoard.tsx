import styles from "./reelBoard.module.scss";
import Reel from "./reel/reel";

export const ICON_HEIGHT: number = 100;

interface ReelsBoardProps {
  positions: number[];
  isSpinning: boolean;
  isWin: boolean;
}

export default function ReelsBoard({ positions, isSpinning, isWin }: ReelsBoardProps) {

  return (
    <div className={styles.reels__inner}>
      <div className={isWin ? styles["win-line"] : ""}></div>
      <Reel stopIndex={positions[0]} isSpinning={isSpinning} delay={0} />
      <Reel stopIndex={positions[1]} isSpinning={isSpinning} delay={0.6} />
      <Reel stopIndex={positions[2]} isSpinning={isSpinning} delay={1.2} />
    </div>
  );
}
