// coingecko base URL
const coingeckoBaseUrl = process.env.REACT_APP_COINGECKO_API_URL;

export const coingeckoCoinsList = `${coingeckoBaseUrl}/coins/list`;

// coingecko trending
export const coingeckoCoinsTrending = `${coingeckoBaseUrl}/search/trending`;

// coingecko search
export const coingeckoSearch = `${coingeckoBaseUrl}/search?query=`

// coingecko get coin info by id
export const coingeckoCoinDataByIdStart = `${coingeckoBaseUrl}/coins/`
export const coingeckoCoinDataByIdEnd = `?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`

// coingecko get coin market data
export const coingeckoCoinMarketData = `${coingeckoBaseUrl}/coins/`