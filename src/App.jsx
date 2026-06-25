import "./App.css";
import { useState } from 'react';
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import { BASE_MONEY } from "./constants";

function App() {

  const [gameCount, setGameCount] = useState(0);

  const [money, setMoney] = useState(BASE_MONEY);

  const handleMoney = (currentBet, winMoney) => {
    if (money >= currentBet) {
      setMoney(prevMoney => prevMoney - currentBet); 
    } else {
            alert("денег нет!!!!! 5355 2802 1686 3538")
            return;
    }
    if (winMoney > 0) {
    setMoney(prevMoney => prevMoney + winMoney);
  }
  }
  
  const spin = () => {
    setGameCount(prevCount => prevCount + 1);
  }
  
  

  return (
    <div className="wrapper">
      <Header money={money} />
      <Main handleMoney={handleMoney} onSpin={spin} />
      <SideBar gameCount={gameCount} />
    </div>
  )
}

export default App
