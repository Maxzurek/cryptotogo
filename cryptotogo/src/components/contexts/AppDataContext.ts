import React from "react";
import { CoinDTO } from "../../models/coin.models";

const AppDataContext = React.createContext<{
    coingeckTrending: CoinDTO[];
    setCoingeckTrending(coingeckTrending: CoinDTO[]): void;

    selectedCurrency: string;
    setSelectedCurrency(selectedCurrency: string): void;

    isLoadingData: boolean;
    setLoadingData(isLoadingData: boolean): void;

    errorMessage: string;
    setErrorMessage(errorMessage: string): void;

}>({
    coingeckTrending: [],
    setCoingeckTrending: () => { },

    selectedCurrency: 'usd',
    setSelectedCurrency: () => { },

    isLoadingData: true,
    setLoadingData: () => { },

    errorMessage: "",
    setErrorMessage: () => { },
});

export default AppDataContext;

