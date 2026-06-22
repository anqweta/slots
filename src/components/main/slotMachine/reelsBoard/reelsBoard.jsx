import "./reelBoard.css";
import Reel from "./reel/reel"

export default function ReelsBoard() {
    return (
        <div className="reels__inner">
            <Reel />
            <Reel />
            <Reel />
        </div>
    )
}