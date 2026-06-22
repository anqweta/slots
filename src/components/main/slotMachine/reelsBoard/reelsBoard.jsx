import "./reelBoard.css";
import Reel from "./reel/reel"

export default function ReelsBoard({isSpinning}) {
    return (
        <div className="reels__inner">
            <Reel isSpinning={isSpinning} />
            <Reel isSpinning={isSpinning}/>
            <Reel isSpinning={isSpinning}/>
        </div>
    )
}