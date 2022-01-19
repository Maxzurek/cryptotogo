// Coingecko Trending
export interface CoinDTO{
    id: string;
    name: string;
    symbol: string;
    market_cap_rank : number
    thumb : string
    small:string
    large:string
    current_price : {}
}

// Coingecko Search
export interface CoinSearchDTO{
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
}
