import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import { BASE_MONEY } from "./constants";

function App() {
  const [gameCount, setGameCount] = useState(0);

  const [money, setMoney] = useState(BASE_MONEY);

  const handleMoney = (amount) => {
    if (money >= amount) {
      setMoney((prevMoney) => prevMoney - amount);
    }
  };

  const spin = () => {
    setGameCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="wrapper">
      <Header money={money} />
      <Main money={money} handleMoney={handleMoney} onSpin={spin} />
      <SideBar gameCount={gameCount} />
    </div>
  );
}

export default App;
