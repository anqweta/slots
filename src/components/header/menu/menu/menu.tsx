import "./menu.css";
import MenuItem from "./menuItem/menuItem"

interface MenuItemType {
    link: string;
}

let MenuItems: MenuItemType[] = [
    { link: "Slots" },
    { link: "Shop" },
    {link: "Top up"}
]

export default function Menu() {
    return (
        <nav className="menu">
            <ul className="menu__list">
                {MenuItems.map((item, index) => (
                    <MenuItem key={index} props={item} />
                ))}
            </ul>
        </nav>
    )
}
