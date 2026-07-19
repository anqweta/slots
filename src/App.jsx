import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import { BASE_MONEY } from "./constants";

function App() {
  const [gameCount, setGameCount] = useState(0);

  const [money, setMoney] = useState(BASE_MONEY);

  const [moneyWin, setMoneyWin] = useState(0);

  const [percentWin, setPercentWin] = useState(0);

  const [icon, setIcon] = useState([0, 0, 0]);

  const [statistic, setStatistic] = useState([
    {
      numberGame: 0,
      result: 0,
      icon: 0,
      bet: 0,
      moneyWin: 0,
      money: 0,
    },
  ]);

  const handleMoney = (amount) => {
    if (money >= amount) {
      setMoney((prevMoney) => prevMoney - amount);
    }
    return money - amount;
  };

  const handleMoneyWin = (moneyWin) => {
    setMoneyWin(moneyWin);
  };

  const handlePercentWin = (countWin) => {
    setPercentWin(Math.round((countWin / (gameCount + 1)) * 100));
    console.log(countWin + "ділимо на " + gameCount);
  };

  const handleIcon = (firstIcon, secondIcon, thirdIcon) => {
    setIcon([firstIcon, secondIcon, thirdIcon]);
  };

  const spin = () => {
    setGameCount((prevCount) => prevCount + 1);
  };

  const addStatisticElement = (result, icon, bet, moneyWin, money) => {
    const newElement = {
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
    <div className="wrapper">
      <Header money={money} />
      <Main
        handleMoneyWin={handleMoneyWin}
        money={money}
        handleMoney={handleMoney}
        onSpin={spin}
        handlePercentWin={handlePercentWin}
        handleIcon={handleIcon}
        addStatisticElement={addStatisticElement}
      />
      <SideBar
        percentWin={percentWin}
        moneyWin={moneyWin}
        gameCount={gameCount}
        icon={icon}
        statistic={statistic}
      />
    </div>
  );
}

export default App;
