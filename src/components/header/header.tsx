import Menu from "./menu/menu/menu";
import "./header.css"

interface HeaderProps {
    money: number;
}

export default function Header({money}: HeaderProps) {
    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>{money}</span></span>
        </header>
    );
}
