import "./App.css";
import { useState } from 'react';
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";

function App() {

  const [gameCount, setGameCount] = useState(0);

  const spin = () => {
    setGameCount(prevCount => prevCount + 1);
  }

  return (
    <div className="wrapper">
      <Header />
      <Main onSpin={spin} />
      <SideBar gameCount={gameCount} />
    </div>
  )
}

export default App
