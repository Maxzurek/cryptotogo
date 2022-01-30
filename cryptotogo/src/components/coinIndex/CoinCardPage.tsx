import { useContext, useEffect } from "react";
import { Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import { ThemeContextProps } from "../../themes/theme.models";
import AppDataContext from "../appDataContext/AppDataContext";
import { withTheme } from "../themeContext/withTheme";

interface CoinCardPageProps extends ThemeContextProps {
    theCoinDetailDTO: CoinDTO;
    clickable?: boolean
}

CoinCardPage.defaultProps = {
    clickable: true
}

function CoinCardPage(props: CoinCardPageProps) {

    const { selectedCurrency } = useContext(AppDataContext);

    const date = new Date().toLocaleString();

    useEffect(() => {

    }, [props.theCoinDetailDTO])


    const renderCard = () => {
        return (
            <Grid verticalAlign="middle" centered style={{ marginTop: 60, marginBottom: 60 }}>
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

export default withTheme(CoinCardPage)