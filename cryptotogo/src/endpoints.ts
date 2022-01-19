// coingecko base URL
const coingeckoBaseUrl = process.env.COINGECKO_API_URL;

export const coingeckoCoinsList = `${coingeckoBaseUrl}/coins/list`;

 // coingecko trending
 export const coingeckoCoinsTrending = `${coingeckoBaseUrl}/search/trending`;