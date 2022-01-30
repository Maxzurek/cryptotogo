import { useContext, useEffect, useState } from "react";
import { Container, Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";
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

            <Container >
                <Grid verticalAlign="middle" centered >
                    <GridRow style={{ padding: 30 }}>
                        <GridColumn width={2} >
                            <Image src={props.theCoinDetailDTO?.large} size="large" />
                        </GridColumn>
                        <GridColumn textAlign="center" width={4} >
                            <Header as="h1" color={props.theme.primaryColor}>
                                {props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}
                            </Header>
                            <Header as="h4" color={props.theme.secondaryColor}>
                                {`Latest Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                    props.theCoinDetailDTO.current_price[selectedCurrency]
                                    :
                                    undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}
                            </Header>
                            <Header as="h5" color={props.theme.secondaryColor}>
                                Current Time: {date}
                            </Header>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
        )
    }

    return (
        renderCard()
    )
}

export default withTheme(CoinCardPage)