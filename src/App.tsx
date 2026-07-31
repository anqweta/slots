import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import { BASE_MONEY } from "./constants";
import StatisticContext from "./providers/StatisticContext"
import MoneyLogicContext from "./providers/MoneyLogicContext";

export interface StatisticItem {
  numberGame: number;
  result: string | number;
  icon: string[] | number;
  bet: number;
  moneyWin: number;
  money: number;
}

function App() {
  const [gameCount, setGameCount] = useState<number>(0);

  const [money, setMoney] = useState<number>(BASE_MONEY);

  const [moneyWin, setMoneyWin] = useState<number>(0);

  const [percentWin, setPercentWin] = useState<number>(0);

  const [icon, setIcon] = useState<number[] | string[]>([0, 0, 0]);

  const [statistic, setStatistic] = useState<StatisticItem[]>([
    {
      numberGame: 0,
      result: 0,
      icon: 0,
      bet: 0,
      moneyWin: 0,
      money: 0,
    },
  ]);


  const addStatisticElement = (
    result: boolean,
    icon: string[],
    bet: number,
    moneyWin: number,
    money: number
  ): void => {
    const newElement: StatisticItem = {
      numberGame: gameCount + 1,
      result: result ? "win" : "lose",
      icon: icon,
      bet: bet,
      moneyWin: moneyWin,
      money: money,
    };
    setStatistic([...statistic, newElement]);
    console.log(newElement);
  };

  return (
    <StatisticContext.Provider value={{
      addStatisticElement: addStatisticElement,
      percentWin: percentWin,
      moneyWin: moneyWin,
      gameCount: gameCount,
      icon: icon,
      statistic: statistic }}>
  <div className="wrapper">
      <Header />
      <Main/>
      <SideBar
          />
    </div>
    </StatisticContext.Provider>
  
  );
}


export default App;
