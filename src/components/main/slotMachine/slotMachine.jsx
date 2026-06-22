import "./slotMachine.css";
import Dots from "./dots";
import ReelsBoard from "./reelsBoard/reelsBoard";
import BetSelector from "./betSelector/betSelector";

let spanClass = [
    { class: "span-red" },
    { class: "span-yellow" },
    { class: "span-blue" },
];

export default function SlotMachine({onSpin}) {
    return (
        <div className="slotMachine">
            <h2 className="title">
                {spanClass.map((item, index) => (
                    <Dots key={index} props={item} />
                ))}LUCKY SPIN {spanClass.map((item, index) => (
                    <Dots key={index} props={item} />
                ))}
            </h2>
            <ReelsBoard />
            <BetSelector/>
            <button onClick={onSpin} className="button-spin">
                SPIN
            </button>

        </div>
    )
}