import Menu from "./menu/menu/menu";
import "./header.css"
import { useContext } from "react";
import GlobalContext from "../../providers/nohatesuperklasskod";

interface HeaderProps {
    money: number;
}

export default function Header() {

    const {money} = useContext(GlobalContext);

    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>{money}</span></span>
        </header>
    );
}
