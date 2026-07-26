import Menu from "./menu/menu/menu";
import "./header.css"
import { useContext } from "react";
import MoneyLogicContext from "../../providers/MoneyLogicContext";

export default function Header() {

    const {money} = useContext(MoneyLogicContext);

    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>{money}</span></span>
        </header>
    );
}
