import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import { Card, Container, Image } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";

interface coinDetailProps {
    theCoinDetailDTO: CoinDTO;

}

export default function CoinDetail(props: coinDetailProps) {

    const [isFlipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFlipped(!isFlipped);
    }, [props])

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
                        <Card.Description as='h3'> {`Last Price (USD) : ${props.theCoinDetailDTO?.current_price?.usd} $`}</Card.Description>
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