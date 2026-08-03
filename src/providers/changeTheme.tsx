import { createContext } from "react";
import type { themePinkType, darkThemeType } from "@/types/typesTheme";
import { darkTheme } from "@/theme/theme";

interface ChangeThemeType {
    themeValue: darkThemeType | themePinkType;
    handleThemeValue: (newThemeValue: darkThemeType | themePinkType) => void;
}

const ChangeThemeContext = createContext<ChangeThemeType>({
    themeValue: darkTheme,
    handleThemeValue: () => {}
})

export default ChangeThemeContext;