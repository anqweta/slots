import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    cssVariables: true,
})

export const pinkTheme = createTheme({
    components: {
        MuiButton: {
        styleOverrides: {
            root: {
                backgroundColor: '#ff00e1',
                },
            }
        }
    }
});