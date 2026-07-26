import { createContext } from "react";


interface StatisticItem {
    numberGame: number;
    result: string | number;
    icon: number | string[];
    bet: number;
    moneyWin: number;
    money: number;
}
interface StatisticContextType {
    addStatisticElement: (result: boolean, icon: string[], bet: number, moneyWin: number, money: number) => void;
    percentWin: number;
    moneyWin: number;
    gameCount: number;
    icon: number[] | string[];
    statistic: StatisticItem[];
}

const StatisticContext = createContext<StatisticContextType>({
    addStatisticElement: () => { },
    percentWin: 0, 
    moneyWin: 0,
    gameCount: 0,
    icon: [0],
    statistic: []
});  

export default StatisticContext;