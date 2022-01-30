import { useContext } from "react";
import { ThemeContextProps } from "../../themes/theme.models";
import { ThemeContext } from "./ThemeContext";

/**
 * This is a high order component. 
 * We pass a component through the function parameter. 
 * We then inject props(from our context provider) to the component and return the latter.
 * 
 * @param WrappedComponent 
 * @returns 
 */
export function withTheme<T extends ThemeContextProps = ThemeContextProps>(
    WrappedComponent: React.ComponentType<T>
) {
    return function ComponentWithTheme(props: Omit<T, keyof ThemeContextProps>) {

        const themeContext = useContext(ThemeContext);

        return (
            <WrappedComponent {...(props as T)} {...themeContext}/**Inject themeContext through our component props */ />
        )
    }
}