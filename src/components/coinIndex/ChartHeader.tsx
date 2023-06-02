import { useContext, useEffect } from "react";
import { Grid, GridColumn, GridRow, Header, Icon, Image } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import { ThemeContextProps } from "../../themes/theme.models";
import AppDataContext from "../appDataContext/AppDataContext";
import { withTheme } from "../themeContext/withTheme";

interface CoinHeaderProps extends ThemeContextProps {
    theCoinDetailDTO: CoinDTO;
    clickable?: boolean
}

ChartHeader.defaultProps = {
    clickable: true
}

function ChartHeader(props: CoinHeaderProps) {

    const { selectedCurrency } = useContext(AppDataContext);

    const date = new Date().toLocaleString();

    useEffect(() => {

    }, [props.theCoinDetailDTO])


    const renderCard = () => {
        return (
            <Grid verticalAlign="middle" centered style={{ marginTop: 35, marginBottom: 35 }}>
                <GridColumn width={4} style={{ padding: 0 }}>
                    <div className="ui">
                        <Image src={props.theCoinDetailDTO?.large} className="ui centered medium" />
                    </div>
                </GridColumn>
                <GridColumn textAlign="left" width={6}>
                    <GridRow style={{ marginBottom: 20 }}>
                        <Header as="h1" color={props.theme.primaryColor}>
                            {props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}
                        </Header>
                    </GridRow>
                    <GridRow style={{ marginBottom: 20 }}>
                        <Header as="h3" color={props.theme.secondaryColor}>
                            {`Latest Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                props.theCoinDetailDTO.current_price[selectedCurrency]
                                :
                                undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}
                        </Header>
                    </GridRow>
                    <GridRow style={{ marginBottom: 20 }}>
                    <Header as='h3' color={props.theme.secondaryColor}>
                            {props.theCoinDetailDTO.market_data.price_change_percentage_24h >= 0 ?
                                <Icon name="caret up" color="green" />
                                :
                                <Icon name="caret down" color="red" />
                            }
                            {`${props.theCoinDetailDTO.market_data.price_change_24h_in_currency[selectedCurrency]}
                             ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}
                        </Header>
                    </GridRow>
                    <GridRow>
                        <Header as="h4" color={props.theme.secondaryColor}>
                            Current Time: {date}
                        </Header>
                    </GridRow>
                </GridColumn>
            </Grid>
        )
    }

    return (
        renderCard()
    )
}

export default withTheme(ChartHeader)