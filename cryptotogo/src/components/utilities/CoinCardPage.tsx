import { useContext, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
import { Card, Container} from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import AppDataContext from "../contexts/AppDataContext";

interface CoinCardPageProps {
    theCoinDetailDTO: CoinDTO;
    clickable? : boolean

}

CoinCardPage.defaultProps = {
    clickable : true
}
export default function CoinCardPage(props: CoinCardPageProps) {

    const { selectedCurrency } = useContext(AppDataContext);

    const [isFlipped, setFlipped] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setFlipped(!isFlipped);
    }, [props.theCoinDetailDTO])

    const onClickCoin = () => {
        
       if(props.clickable){
        const coinDTO: CoinDTO = props.theCoinDetailDTO;
         navigate('/coin', { state: { coinDTO } }) 
       }
    }

    const renderCard = () => {
        return (
        
                <Card fluid>
                    <Card.Content>
                        <Container as={'a'} fluid onClick={onClickCoin}>
                            <Card.Header as='h2' textAlign="center">{props.theCoinDetailDTO?.name}{` (${props.theCoinDetailDTO?.symbol})`}</Card.Header>
                            <Card.Description as='h3'>
                                {`Latest Price (CAD) : ${props.theCoinDetailDTO?.current_price ?
                                    props.theCoinDetailDTO.current_price['cad']
                                    :
                                    undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'} (EURO) : ${props.theCoinDetailDTO?.current_price ?
                                        props.theCoinDetailDTO.current_price['eur'] 
                                        :
                                        undefined} ${selectedCurrency === 'eth' || selectedCurrency === 'btc' ? '' : '$'} (USD) : ${props.theCoinDetailDTO?.current_price ?
                                            props.theCoinDetailDTO.current_price['usd'] 
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