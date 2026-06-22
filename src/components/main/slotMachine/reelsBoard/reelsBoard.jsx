import "./reelBoard.css";
import Reel from "./reel/reel"

export default function ReelsBoard({positions, isSpinning}) {
    return (
        <div className="reels__inner">
            <Reel stopPosition={positions[0]} isSpinning={isSpinning} />
            <Reel stopPosition={positions[1]} isSpinning={isSpinning}/>
            <Reel stopPosition={positions[2]} isSpinning={isSpinning}/>
        </div>
    )
}