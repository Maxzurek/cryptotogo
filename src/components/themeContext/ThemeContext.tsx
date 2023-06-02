import { createContext } from "react";
import { CryptoToGoTheming } from "../../themes/theme.models";
import { CryptoToGoTheme } from "../../themes/themes";

export const ThemeContext = createContext<{
    theme: CryptoToGoTheming;
    setTheme(themeContext: CryptoToGoTheming): void;
}>({
    theme: CryptoToGoTheme,
    setTheme: ()=>{}
})