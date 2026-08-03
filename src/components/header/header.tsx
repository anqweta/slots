import { useSelector } from "react-redux";

import Menu from "./menu/menu/menu";
import styles from "./header.module.scss"
import { moneySelector } from "@/features/balance/selector";
import Select from "./select/select";

export default function Header() {

    const money = useSelector(moneySelector);

    return (
        <header>
            <span className={styles.logo}>LUCKY<span>SPIN</span></span>
            <Menu />
            <span className={styles.balance}>БАЛАНС <span>{money}</span></span>
            <Select/>
        </header>
    );
}
