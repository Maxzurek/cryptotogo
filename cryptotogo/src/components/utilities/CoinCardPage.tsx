import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Container, Grid, GridColumn, GridRow, Image, Item, Menu } from "semantic-ui-react";
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

    const [isFlipped, setFlipped] = useState(false);

    const navigate = useNavigate();
    
    const date = new Date().toLocaleString();

    useEffect(() => {
        setFlipped(!isFlipped);
    }, [props.theCoinDetailDTO])

    const onClickCoin = () => {

        if (props.clickable) {
            const coinDTO: CoinDTO = props.theCoinDetailDTO;
            navigate('/coin', { state: { coinDTO } })
        }
    }

    const renderCard = () => {
        return (
            
            <Grid size="50" color="blue" verticalAlign="top">
                <GridRow style={{ padding:30 }}>
                    <GridColumn width={2}>
                        <Item as={NavLink} to='/'>
                            <Image src={props.theCoinDetailDTO?.large} size="small" />
                        </Item>
                    </GridColumn>
                    
                <GridColumn width={4}>
                </GridColumn>
                <GridColumn textAlign="center" width={4}>
                <h2>{props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}</h2>
                <h3>{`Latest Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                    props.theCoinDetailDTO.current_price[selectedCurrency]
                                    :
                                    undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}</h3>
                                    <h4>Current Time: {date}</h4>
                </GridColumn>

                </GridRow>

            </Grid>
        )
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            {renderCard()}
            {renderCard()}
        </ReactCardFlip>
    )
}