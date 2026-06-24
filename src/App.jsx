import "./App.css";
import { useState } from 'react';
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";

function App() {

  const [gameCount, setGameCount] = useState(0);

  const [money, setMoney] = useState(100);

  
  const spin = () => {
    setGameCount(prevCount => prevCount + 1);
  }
  
  

  return (
    <div className="wrapper">
      <Header money={money} />
      <Main money={money} setMoney={setMoney} onSpin={spin} />
      <SideBar gameCount={gameCount} />
    </div>
  )
}

export default App
