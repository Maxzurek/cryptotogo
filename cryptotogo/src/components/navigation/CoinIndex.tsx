import { useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";

interface StateType {
    coinDTO: CoinDTO
}

interface CoinIndexProps {

}

export default function CoinIndex(props: CoinIndexProps) {

    const location = useLocation();
    const state = location.state as StateType;
    const { coinDTO } = state;

    return (
        <Container fluid>
            <div>
                <h1>Id: {coinDTO.id}</h1>
            </div>
            <div>
                <h1>Name: {coinDTO.name} </h1>
            </div>
            <div>
                <h1>Current Price: (USD) {coinDTO.current_price?.usd}$</h1>
            </div>
        </Container>
    )
};
