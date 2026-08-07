import { ThemeProvider } from '@mui/material'
import styles from './App.module.scss'
import Header from './components/header/header'
import Main from './components/main/main'
import SideBar from './components/sideBar/sideBar'
import ChangeThemeContext from './providers/changeTheme'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { darkTheme } from '@/theme/theme'
import { Theme } from '@emotion/react'
import { themesMap } from '@/theme/theme'

function App() {
  const [themeValue, setThemeValue] = useState<Theme>(darkTheme)

  const handleThemeValue = (newThemeKey: string) => {
    console.log(newThemeKey, themesMap[newThemeKey])
    setThemeValue(themesMap[newThemeKey])
  }

  return (
    <ChangeThemeContext.Provider
      value={{
        themeValue: themeValue,
        handleThemeValue: handleThemeValue,
      }}
    >
      <ThemeProvider theme={themeValue}>
        <div className={styles.wrapper}>
          <Header />
          <Main />
          <SideBar />
          <Button className="button" variant="contained">
            Hello world
          </Button>
        </div>
      </ThemeProvider>
    </ChangeThemeContext.Provider>
  )
}

export default App
