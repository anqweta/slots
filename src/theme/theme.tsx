import { createTheme, Theme } from '@mui/material'
import { pink, blue } from '@mui/material/colors'

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#16162a',
      dark: '#0d0d1a',
      light: '#1e1e30',
    },
    secondary: {
      main: '#f5c542',
      light: 'rgb(0, 83, 0)',
      dark: 'rgb(90, 0, 0)',
    },
    text: {
      primary: '#7a7a9a',
    },
  },
})

export const pinkTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: pink[100],
      dark: pink[50],
      light: pink[200],
    },
    secondary: {
      main: blue[300],
      light: 'rgb(136, 209, 136)',
      dark: 'rgb(213, 112, 112)',
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff00e1',
        },
      },
    },
  },
})

export const themesMap: Record<string, Theme> = {
  dark: darkTheme,
  pink: pinkTheme,
}
