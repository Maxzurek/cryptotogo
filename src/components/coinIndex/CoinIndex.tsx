import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { coingeckoCoinMarketData } from "../../endpoints";
import { CoinDTO, PriceAction } from "../../models/coin.models";
import AppDataContext from "../appDataContext/AppDataContext";
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";
import TimeFrameTab from "./TimeFrameTab";

interface StateType {
  coinDTO: CoinDTO
}

interface CoinIndexProps {

}

export default function CoinIndex(props: CoinIndexProps) {

  const { selectedCurrency } = useContext(AppDataContext);
  const location = useLocation();
  const state = location.state as StateType;
  const { coinDTO } = state;

  const [priceAction, setPriceActions] = useState<PriceAction[]>([])
  const [days, setDays] = useState('1')
  const [interval, setInterval] = useState('hourly')
  const [activeItem, setActiveItem] = useState('1D')
  const [xAxisInterval, setxAxisInterval] = useState(1)

  const handleItemClick = (e: any, { name }: any) => { //handle the tab clicked to change the days and interval of the chart

    setActiveItem(name);

    switch (name) {
      case '1D':
        setDays('1');
        setInterval('hourly')
        setxAxisInterval(1)
        break;
      case '5D':
        setDays('5')
        setInterval('hourly')
        setxAxisInterval(10)
        break;
      case '1M':
        setDays('30')
        setInterval('daily')
        setxAxisInterval(1)
        break;
      case '6M':
        setDays('180')
        setInterval('daily')
        setxAxisInterval(12)
        break;
      case '1Y':
        setDays('365')
        setInterval('daily')
        setxAxisInterval(25)
        break;
    }
  }

  const getUrl = `${coingeckoCoinMarketData}${coinDTO.id}/market_chart?vs_currency=${selectedCurrency}&days=${days}&interval=${interval}`;

  useEffect(() => {

    async function getData() { // get the data of the coins clicked

      await axios.get(getUrl)
        .then(response => {
          let prices: any[] = response.data.prices;
          let priceActions: PriceAction[] = [];

          prices.map(price => {
            let priceAction: PriceAction = {
              name: "",
              price: 0
            };
            if (days === '1') {
              priceAction.name = new Date(price[0]).toLocaleTimeString();
            } else if (days === '5') {
              priceAction.name = new Date(price[0]).toLocaleString();
            } else {
              priceAction.name = new Date(price[0]).toLocaleDateString();
            }
            priceAction.price = price[1];
            priceActions.push(priceAction);

            return priceAction;
          })

          setPriceActions(priceActions)
        })
    }

    getData();

  }, [selectedCurrency, days, coinDTO, getUrl])

  return (

    <Container fluid>
      <ChartHeader theCoinDetailDTO={coinDTO} clickable={false} />
      <TimeFrameTab activeItem={activeItem} handleItemClick={handleItemClick} />
      <Chart priceAction={priceAction} xAxisInterval={xAxisInterval} interval={xAxisInterval} />
    </Container>
  );
};
