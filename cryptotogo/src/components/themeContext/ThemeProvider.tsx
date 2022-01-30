import { ReactNode, useState } from "react";
import { CryptoToGoTheming } from "../../themes/theme.models";
import { PrimaryTheme } from "../../themes/themes";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps{
    children: ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {

    const [theme, setTheme] = useState<CryptoToGoTheming>(PrimaryTheme);

    return(
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
};