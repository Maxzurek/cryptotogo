import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import { Card, Container, Image, Segment } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import AppDataContext from "../appDataContext/AppDataContext";

interface coinDetailProps {
    theCoinDetailDTO: CoinDTO;
    clickable? : boolean
}

CoinDetail.defaultProps = {
    clickable : true
}
export default function CoinDetail(props: coinDetailProps) {

    const { selectedCurrency } = useContext(AppDataContext);
    const [isFlipped, setFlipped] = useState(false);

    const navigate = useNavigate();

   //set filp animation of the cards when theCoinDetailDTO values change
    useEffect(() => {
        setFlipped(!isFlipped);
    }, [props.theCoinDetailDTO])

    //When we click on each coin card, we tranfer its detail data to /coin page
    const onClickCoin = () => {
       if(props.clickable){
         const coinDTO: CoinDTO = props.theCoinDetailDTO;
         navigate('/coin', { state: { coinDTO } }) 
       }
    }

    //We map detail information for each coin card
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
                                    undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'}`}
                            </Card.Description>
                            <Card.Meta as='h2'>{`Market Cap Rank : ${props.theCoinDetailDTO?.market_cap_rank}`} </Card.Meta>
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