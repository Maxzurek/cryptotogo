import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Menu } from "semantic-ui-react";
import { coingeckoCoinMarketData } from "../../endpoints";
import { CoinDTO } from "../../models/coin.models";
import AppDataContext from "../contexts/AppDataContext";
import CoinCardPage from "../utilities/CoinCardPage";


interface StateType {
  coinDTO: CoinDTO
}

interface CoinIndexProps {

}
interface PriceAction {
  name: string
  price: number
}


export default function CoinIndex(props: CoinIndexProps) {
  const { selectedCurrency } = useContext(AppDataContext);
  const location = useLocation();
  const state = location.state as StateType;
  const { coinDTO } = state;

  const [priceActions, setPriceActions] = useState<PriceAction[]>([])
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
  async function getData() { // get the data of the coins clicked

    await axios.get(`${coingeckoCoinMarketData}${coinDTO.id}/market_chart?vs_currency=${selectedCurrency}&days=${days}&interval=${interval}`)
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
        })

        setPriceActions(priceActions)

      })

  }
  useEffect(() => {
    getData();

  }, [selectedCurrency, days])

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CoinCardPage theCoinDetailDTO={coinDTO} clickable={false} />
      <Menu fluid tabular size='large' widths={10}>
        <Menu.Item
          name='1D'
          active={activeItem === '1D'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='5D'
          active={activeItem === '5D'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='1M'
          active={activeItem === '1M'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='6M'
          active={activeItem === '6M'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='1Y'
          active={activeItem === '1Y'}
          onClick={handleItemClick}
        />

      </Menu>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart data={priceActions}
          margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
          <defs>

            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#82ca9d" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" interval={xAxisInterval} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorPrice)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>

  );
};
