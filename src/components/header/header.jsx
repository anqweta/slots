import Menu from "./menu/menu/menu";
import "./header.css"

export default function Header() {
    return (
        <header>
            <span className="logo">LUCKY<span>SPIN</span></span>
            <Menu />
            <span className="balance">БАЛАНС <span>сюди змінну алло</span></span>
        </header>
    );
}