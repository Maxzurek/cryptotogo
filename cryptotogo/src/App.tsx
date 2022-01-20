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
import AppDataContext from './components/contexts/AppDataContext';

export default function App() {

  const [fetchTimer, setFetchTimer] = useState<NodeJS.Timeout>();
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [coingeckoTrending, setCoingeckoTrending] = useState<CoinDTO[]>([]);
  const [isLoadingData, setLoadingData] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {

    const getCoinsTrending = async () => {

      await axios.get(coingeckoCoinsTrending)
        .then((response) => {

          var coinDTOs: CoinDTO[] = [];

          response.data.coins.map(async (coin: any) => {

            const coinDTO: CoinDTO = await fetchCoinInfo(coin.item.id)
            coinDTOs.push(coinDTO)
          })
          console.log(coinDTOs)
          setCoingeckoTrending(coinDTOs)
          setLoadingData(false);
        })
        .catch((error: AxiosError) => {
          setErrorMessage(error.message)
        })
    }

    setFetchTimer(
      setTimeout(() => {
        setFetchData(!fetchData)
      }, 10000)
    );

    getCoinsTrending();

  }, [fetchData])

  return (
    <AppDataContext.Provider value={{
      coingeckTrending: coingeckoTrending,
      setCoingeckTrending: setCoingeckoTrending,
      isLoadingData,
      setLoadingData: setLoadingData,
      errorMessage,
      setErrorMessage: setErrorMessage
    }}>
      <BrowserRouter>
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
      </BrowserRouter>
    </AppDataContext.Provider>
  )
};
