export interface ThemeContextProps{
    theme: CryptoToGoTheming;
    setTheme(themeContext: CryptoToGoTheming): void;
}

export interface CryptoToGoTheming{
    primaryColor: SemanticCOLORS;
    secondaryColor: SemanticCOLORS
}