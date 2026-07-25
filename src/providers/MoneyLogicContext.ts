import { createContext } from "react";
import { BASE_MONEY } from "../constants";
import GlobalContext from "./StatisticContext";

interface MoneyLogicContextType {
    money: number;
    handleMoneyWin: (moneyWin: number) => void;
    handleMoney: (amount: number) => number;
    onSpin: () => void;
    handleIcon: (firstIcon: string, secondIcon: string, thirdIcon: string) => void;
    handlePercentWin: (countWin: number) => void;
}

const MoneyLogicContext = createContext<MoneyLogicContextType>({
    money: BASE_MONEY,
    handleMoneyWin: () => { },
    handleMoney: () => 0,
    onSpin: () => { },
    handlePercentWin: () => { },
    handleIcon: () => { },
})

export default MoneyLogicContext;

