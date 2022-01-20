import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import { Card, Container, Image } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import AppDataContext from "../contexts/AppDataContext";

interface coinDetailProps {
    theCoinDetailDTO: CoinDTO;

}

export default function CoinDetail(props: coinDetailProps) {

    const { selectedCurrency } = useContext(AppDataContext);
    const [isFlipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFlipped(!isFlipped);
    }, [props.theCoinDetailDTO])

    const onClickCoin = () => {
        const coinDTO: CoinDTO = props.theCoinDetailDTO;
        console.log(coinDTO)
        navigate('/coin', { state: { coinDTO } })
    }

    const renderCard = () => {
        return (
            <Card>
                <Card.Content>
                    <Container as={'a'} fluid onClick={onClickCoin}>
                        <Image src={props.theCoinDetailDTO?.small} />
                        <Card.Header as='h2'>{props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}</Card.Header>
                        <Card.Description as='h3'>
                            {`Last Price (${selectedCurrency.toUpperCase()}) : ${props.theCoinDetailDTO?.current_price ?
                                    props.theCoinDetailDTO.current_price[selectedCurrency]
                                    :
                                    undefined} $`}
                        </Card.Description>
                        <Card.Meta as='h2'>{`Market Cap : ${props.theCoinDetailDTO?.market_cap_rank}`} </Card.Meta>
                    </Container>
                </Card.Content>
            </Card>
        )
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            {renderCard()}
            {renderCard()}
        </ReactCardFlip>
    )
}