import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import { BASE_MONEY } from "./constants";

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

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <SideBar
      />
    </div>
  
  );

}

  export default App;
