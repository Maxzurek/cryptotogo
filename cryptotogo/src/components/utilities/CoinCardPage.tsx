import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Container, Grid, GridColumn, GridRow, Image, Item, Menu, Segment } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import AppDataContext from "../contexts/AppDataContext";

interface CoinCardPageProps {
    theCoinDetailDTO: CoinDTO;
    clickable?: boolean

}

CoinCardPage.defaultProps = {
    clickable: true
}
export default function CoinCardPage(props: CoinCardPageProps) {

    const { selectedCurrency } = useContext(AppDataContext);

    const navigate = useNavigate();

    const date = new Date().toLocaleString();

    useEffect(() => {

    }, [props.theCoinDetailDTO])

    const onClickCoin = () => {

        if (props.clickable) {
            const coinDTO: CoinDTO = props.theCoinDetailDTO;
            navigate('/coin', { state: { coinDTO } })
        }
    }

    const renderCard = () => {
        return (

            <Container >
                <Grid size="50" color="yellow" verticalAlign="middle" centered >
                    <GridRow style={{ padding: 30 }}>
                        <GridColumn width={2} >

                            <Image src={props.theCoinDetailDTO?.large} size="large" />

                        </GridColumn>
                        <GridColumn textAlign="center" width={4} >
                            <h1>{props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}</h1>
                            <h4>{`Latest Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                props.theCoinDetailDTO.current_price[selectedCurrency]
                                :
                                undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}</h4>
                            <h5>Current Time: {date}</h5>
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