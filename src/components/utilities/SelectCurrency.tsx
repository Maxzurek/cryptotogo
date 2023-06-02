import { useContext } from "react";
import { Select } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import AppDataContext from "../appDataContext/AppDataContext";
import { withTheme } from "../themeContext/withTheme";


interface selectCurrencyProps extends ThemeContextProps {

}

function SelectCurrency(props: selectCurrencyProps) {

    const { selectedCurrency, setSelectedCurrency } = useContext(AppDataContext);

    //select Currency values
    const currencyOptions = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'CAD', value: 'cad', text: 'CAD' },
        { key: 'EUR', value: 'eur', text: 'EUR' },
        { key: 'ETH', value: 'eth', text: 'ETH' },
        { key: 'BTC', value: 'btc', text: 'BTC' },
    ]

    const onChangeCurrency = (event: React.SyntheticEvent<HTMLElement, Event>, data: any) => {
        setSelectedCurrency(data.value)
    }

    return (
        <Select
            fluid
            options={currencyOptions}
            onChange={onChangeCurrency}
            value={selectedCurrency}
            color={props.theme.secondaryColor}
        />
    )
}

export default withTheme(SelectCurrency)