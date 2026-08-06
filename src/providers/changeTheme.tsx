import { createContext } from "react";
import { darkTheme } from "@/theme/theme";
import { Theme } from "@emotion/react";

interface ChangeThemeType {
    themeValue: Theme;
    handleThemeValue: (key: string) => void;
}

const ChangeThemeContext = createContext<ChangeThemeType>({
    themeValue: darkTheme,
    handleThemeValue: () => {}
})

export default ChangeThemeContext;