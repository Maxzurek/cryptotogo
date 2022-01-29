import { createContext } from "react";
import { SemanticCOLORS } from "semantic-ui-react";

export const ThemeContext = createContext<{
    themeContext: Object
}>({
    themeContext: {
        primaryColor: 'blue' as SemanticCOLORS,
        setPrimaryColor: ()=>{},
        secondaryColor: 'teal' as SemanticCOLORS,
        setSecondaryColor: ()=>{},
    }
})