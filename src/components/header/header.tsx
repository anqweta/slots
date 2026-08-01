import Menu from "./menu/menu/menu";
import "./header.css"
import { useSelector } from "react-redux";
import { moneySelector } from "../../features/moneyLogic/selector";

export default function Header() {

    const money = useSelector(moneySelector);

    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>{money}</span></span>
        </header>
    );
}
