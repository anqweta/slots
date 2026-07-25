import { createContext } from "react";
import { BASE_MONEY } from "../constants";

interface StatisticItem {
    numberGame: number;
    result: string | number;
    icon: number | string[];
    bet: number;
    moneyWin: number;
    money: number;
}
interface GlobalContextType {
    money: number;
    handleMoneyWin: (moneyWin: number) => void;
    handleMoney: (amount: number) => number;
    onSpin: () => void;
    handlePercentWin: (countWin: number) => void;
    handleIcon: (firstIcon: string, secondIcon: string, thirdIcon: string) => void;
    addStatisticElement: (result: boolean, icon: string[], bet: number, moneyWin: number, money: number) => void;
    percentWin: number;
    moneyWin: number;
    gameCount: number;
    icon: number[] | string[];
    statistic: StatisticItem[];
}

const GlobalContext = createContext<GlobalContextType>({
    money: BASE_MONEY,
    handleMoneyWin: () => { },
    handleMoney: () => 0,
    onSpin: () => { },
    handlePercentWin: () => { },
    handleIcon: () => { },
    addStatisticElement: () => { },
    percentWin: 0, 
    moneyWin: 0,
    gameCount: 0,
    icon: [0],
    statistic: []
});  

export default GlobalContext;