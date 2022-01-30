import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import { ThemeContextProps } from "../../themes/theme.models";
import AppDataContext from "../appDataContext/AppDataContext";
import { withTheme } from "../themeContext/withTheme";

interface coinDetailProps extends ThemeContextProps {
    theCoinDetailDTO: CoinDTO;
    clickable?: boolean
}

CoinDetail.defaultProps = {
    clickable: true
}

function CoinDetail(props: coinDetailProps) {

    const { selectedCurrency } = useContext(AppDataContext);
    const [isFlipped, setFlipped] = useState(false);

    const navigate = useNavigate();

    //set filp animation of the cards when theCoinDetailDTO values change
    useEffect(() => {
        setFlipped(isFlipped => !isFlipped);
    }, [props.theCoinDetailDTO])

    //When we click on each coin card, we tranfer its detail data to /coin page
    const onClickCoin = () => {
        if (props.clickable) {
            const coinDTO: CoinDTO = props.theCoinDetailDTO;
            navigate('/coin', { state: { coinDTO } })
        }
    }

    //We map detail information for each coin card
    const renderCard = () => {
        return (
            <Container>
                <Card color={props.theme.primaryColor} >
                    <Card.Content>
                        <Container as={'a'} fluid onClick={onClickCoin}>
                            <Image src={props.theCoinDetailDTO?.small} />
                            <Header as='h2' color={props.theme.primaryColor}>
                                {props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}
                            </Header>
                            <Header as='h3' color={props.theme.secondaryColor}>
                                {`Last Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                    props.theCoinDetailDTO.current_price[selectedCurrency]
                                    :
                                    undefined} 
                                ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`
                                }
                            </Header>
                            <Header as='h3' color={props.theme.secondaryColor}>
                                {props.theCoinDetailDTO.market_data.price_change_percentage_24h >= 0 ?
                                    <Icon name="caret up" color="green" />
                                    :
                                    <Icon name="caret down" color="red" />
                                }
                                {`${props.theCoinDetailDTO.market_data.price_change_24h_in_currency[selectedCurrency]}
                             ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}
                            </Header>
                            <Header style={{ fontSize: 14 }} color={props.theme.secondaryColor}>
                                {`Market Cap Rank : ${props.theCoinDetailDTO?.market_cap_rank}`}
                            </Header>
                        </Container>
                    </Card.Content>
                </Card>
            </Container>
        )
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            {renderCard()}
            {renderCard()}
        </ReactCardFlip>
    )
}

export default withTheme(CoinDetail);