import { useContext } from "react";
import { Select } from "semantic-ui-react";
import AppDataContext from "../contexts/AppDataContext";


interface selectCurrencyProps {

}

export default function SelectCurrency(props: selectCurrencyProps) {

    const {selectedCurrency, setSelectedCurrency} = useContext(AppDataContext);
 
    const currencyOptions = [

        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'CAD', value: 'cad', text: 'CAD' },
        { key: 'EUR', value: 'eur', text: 'EUR' },
        { key: 'BTC', value: 'btc', text: 'BTC' },
        { key: 'BNB', value: 'bnb', text: 'BNB' },
        { key: 'XRP', value: 'xrp', text: 'XRP' },
        { key: 'BITS', value: 'bits', text: 'BITS' },
        { key: 'ZAR', value: 'zar', text: 'ZAR' },
        { key: 'TWD', value: 'twd', text: 'TWD' },

    ]

    const onChangeCurrency = (event: React.SyntheticEvent<HTMLElement, Event>, data: any) => {
        setSelectedCurrency(data.value)
    }

    return (
        <Select fluid options={currencyOptions} onChange={onChangeCurrency} value={selectedCurrency} />
    )
}