export interface ThemeContextProps{
    theme: CryptoToGoTheming;
    setTheme(themeContext: CryptoToGoTheming): void;
}

export interface CryptoToGoTheming{
    name: string;
    primaryColor: SemanticCOLORS;
    secondaryColor: SemanticCOLORS;
    backgroundColor?: string | undefined;
}