import { useContext } from "react";
import { SemanticCOLORS } from "semantic-ui-react";
import { ThemeContext } from "./ThemeContext";

export interface WithThemeProps{
    primaryColor: SemanticCOLORS;
    secondaryColor: SemanticCOLORS
}

/**
 * This is a high order component. 
 * We pass a component through the function parameter. 
 * We then inject props(from our context provider) to the component and return the latter.
 * 
 * @param WrappedComponent 
 * @returns 
 */
export function withTheme<T extends WithThemeProps = WithThemeProps>(
    WrappedComponent: React.ComponentType<T>
) {
    return function ComponentWithTheme(props: Omit<T, keyof WithThemeProps>) {

        const { themeContext } = useContext(ThemeContext);

        return (
            <WrappedComponent {...(props as T)} {...themeContext}/**Inject themeContext through our component props */ />
        )
    }
}