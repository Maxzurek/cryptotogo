import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MainNavBar from './components/navigation/MainNavBar';
import routes from './routeConfig';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { fetchCoinInfo } from './components/utilities/fetchFunctions';
import { coingeckoCoinsTrending } from './endpoints';
import { CoinDTO } from './models/coin.models';
import AppDataContext from './components/appDataContext/AppDataContext';
import MediaProvider from './components/mediaContext/MediaProvider';
import ThemeProvider from './components/themeContext/ThemeProvider';
import Footer from './components/footer/Footer';

export default function App() {

  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('usd');
  const [coingeckoTrending, setCoingeckoTrending] = useState<CoinDTO[]>([]);
  const [isLoadingData, setLoadingData] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {

    const getCoinsTrendingAsync = async () => {

      let requests: any[] = [];

      await axios.get(coingeckoCoinsTrending) // Coingecko API get method
        .then(async (response) => {

          let coins: [] = response.data.coins;
          coins.splice(6) // Keep only top 6 coins, API returns top 7

          coins.map((coin: any, index: number) => {
            requests.push(fetchCoinInfo(coin.item.id)) // See fetchFunctions.ts inside utilities folder
            return requests;
          })

          await axios.all(requests) // Get additionnal infos for each trending coins (Goingecko get market_data by coin Id)
            .then((responses: CoinDTO[]) => {
              setCoingeckoTrending(responses)
              setLoadingData(false); // Used for the dimmer component inside the LandingPage
            })

        })
        .catch((error: AxiosError) => {
          setErrorMessage(error.message)
        })
    }

    setTimeout(() => { // We want to fetch data every 30 seconds
      setRefreshData(!refreshData)
    }, 30000)

    getCoinsTrendingAsync();

  }, [refreshData])

  return (
    <AppDataContext.Provider value={{  // This context provider is available through all our application.
      coingeckTrending: coingeckoTrending,
      setCoingeckTrending: setCoingeckoTrending,
      selectedCurrency,
      setSelectedCurrency: setSelectedCurrency,
      isLoadingData,
      setLoadingData: setLoadingData,
      errorMessage,
      setErrorMessage: setErrorMessage
    }}>
      <BrowserRouter>
        <MediaProvider>
          <ThemeProvider>

            <MainNavBar />

            <Container fluid>
              <Routes>
                {routes.map(route =>
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}>
                  </Route>)}
              </Routes>
            </Container>

            <Footer />

          </ThemeProvider>
        </MediaProvider>
      </BrowserRouter>
    </AppDataContext.Provider>
  )
};