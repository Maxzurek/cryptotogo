import { ReactNode, useState } from "react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps{
    children: ReactNode
}

export default function ThemeProvider(props: ThemeProviderProps) {

    const [primaryColor, setPrimaryColor] = useState<SemanticCOLORS>();
    const [secondaryColor, setSecondaryColor] = useState<SemanticCOLORS>();

    return(
        <ThemeContext.Provider value={{
            themeContext: {
                primaryColor: primaryColor,
                setPrimaryColor: setPrimaryColor,
                secondaryColor: secondaryColor,
                setSecondaryColor: setSecondaryColor
            }
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
};