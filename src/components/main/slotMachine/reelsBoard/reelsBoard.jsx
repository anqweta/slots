import "./reelBoard.css";
import Reel from "./reel/reel";

export const ICON_HEIGHT = 100;

const getPixels = (position) => position * ICON_HEIGHT;

export default function ReelsBoard({ positions, isSpinning, isWin }) {
  let reelPositions = positions.map((position) => ({
    stopPosition: getPixels(position),
  }));

  return (
    <div className="reels__inner">
      <div className={isWin ? "win-line" : ""}></div>
      {reelPositions.map((item, index) => (
        <Reel
          key={index}
          stopPosition={item.stopPosition}
          isSpinning={isSpinning}
        />
      ))}
    </div>
  );
}
