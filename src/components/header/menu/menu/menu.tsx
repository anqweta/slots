import styles from "./menu.module.scss";
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
            <ul className={styles.menu__list}>
                {MenuItems.map((item, index) => (
                    <MenuItem key={index} props={item} />
                ))}
            </ul>
        </nav>
    )
}
