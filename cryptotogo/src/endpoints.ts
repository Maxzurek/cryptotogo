// coingecko base URL
const coingeckoBaseUrl = process.env.REACT_APP_COINGECKO_API_URL;

export const coingeckoCoinsList = `${coingeckoBaseUrl}/coins/list`;

 // coingecko trending
 export const coingeckoCoinsTrending = `${coingeckoBaseUrl}/search/trending`;
 
  // coingecko search
 export const coingeckoSearch = `${coingeckoBaseUrl}/search?query=`