import { ThemeProvider } from "@mui/material";
import styles from "./App.module.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";
import ChangeThemeContext from "./providers/changeTheme";
import Button from '@mui/material/Button';
import { useState } from "react";
import { darkTheme, pinkTheme } from "@/theme/theme";
import type { themePinkType, darkThemeType } from "./types/typesTheme";

function App() {

  const [themeValue, setThemeValue] = useState<themePinkType | darkThemeType>(pinkTheme);

  const handleThemeValue = (newThemeValue: themePinkType | darkThemeType) => {
      setThemeValue(newThemeValue);
  };

  return (
    <ChangeThemeContext.Provider value={{
      themeValue: themeValue,
      handleThemeValue: handleThemeValue
    }}>
    <ThemeProvider theme={themeValue}>
      <div className={styles.wrapper}>
            <Header />
            <Main />
            <SideBar />
            <Button className="button" variant="contained">Hello world</Button>
          </div>
    </ThemeProvider>
    </ChangeThemeContext.Provider>
  );
}

  export default App;
