import styles from "./App.module.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <SideBar
      />
    </div>

  );

}

  export default App;
