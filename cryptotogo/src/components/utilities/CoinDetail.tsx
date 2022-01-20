import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, DropdownProps, Form, Icon, Image, Label, Select } from "semantic-ui-react";
import { CoinDTO } from "../../models/coin.models";
import SelectCurrency from "./SelectCurrency";


interface coinDetailProps {
    theCoinDetailDTO: CoinDTO;

}

export default function CoinDetail(props: coinDetailProps) {



    const navigate = useNavigate();

    const onClickCoin = () => {
        const coinDTO: CoinDTO = props.theCoinDetailDTO;
        console.log(coinDTO)
        navigate('/coin', { state: { coinDTO } })
    }


    return (
        <Card>
            <Card.Content>
                <Container as={'a'} fluid onClick={onClickCoin}>
                    <Image src={props.theCoinDetailDTO.small} />
                    <Card.Header as='h2'>{props.theCoinDetailDTO.name}{` (${props.theCoinDetailDTO.symbol})`}</Card.Header>
                </Container>
                <Card.Description as='h3'> {`Last Price (USD) : ${props.theCoinDetailDTO.current_price.usd} $`}</Card.Description>
                <Card.Meta as='h2'>{`Market Cap : ${props.theCoinDetailDTO.market_cap_rank}`} </Card.Meta>

            </Card.Content>
        </Card>
    )
}