import Menu from "./menu/menu/menu";
import "./header.css"
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

export default function Header() {

    const money = useSelector((state: RootState) => state.money.money)

    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>{money}</span></span>
        </header>
    );
}
