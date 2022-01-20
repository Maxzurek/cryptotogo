import { useState } from "react";
import { Select } from "semantic-ui-react";


interface selectCurrencyProps {

}

export default function SelectCurrency(props: selectCurrencyProps) {

    const [currency, setCurrency] = useState();
 
    const currencyOptions = [

        { key: 'usd', value: 'usd', text: 'usd' },
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
        setCurrency(data.value)

        let currency = data.value as string
        console.log(currency)

    }

    return (
        <Select fluid options={currencyOptions} onChange={onChangeCurrency} value={currency} />
    )
}