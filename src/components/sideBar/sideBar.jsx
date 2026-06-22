import "./sideBar.css";
import StatisticWidget from "./statisticWidget/statisticWidget";

export default function SideBar({gameCount}) {
    return (
        <aside>
            <StatisticWidget gameCount={gameCount} />
        </aside>
    )
}