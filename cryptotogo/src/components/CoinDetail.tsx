import { Card, Container, Form, Icon } from "semantic-ui-react";
import { CoinDTO } from "../models/coin.models";


interface coinDetailProps {
    theCoinDetailDTO: CoinDTO | undefined;

}

export default function CoinDetail() {

    const onClickCoin = () => {

    }

    return (
        <Form>
            <Container>
                <Card>
                    <Card.Content>
                        <Container as={'a'} fluid onClick={onClickCoin}>
                             {/* <Icon src={props.theCoinDetailDTO.thumb} floated='right' size="small" />
                             <Card.Header as='h3'>{props.theCoinDetailDTO.name}+{`(${props.theCoinDetailDTO.symbol})`}</Card.Header> */}
                             {/* <Card.Description as='h2'>{`Last Price (${props.theCoinDetailDTO.symbol}): ${props.theCoinDetailDTO.price_btc}`</Card.Description> */}
                            {/* <Label attached="top" size="huge" color="yellow">
                                {props.movieToGoDTO?.voteAverage ? `Rating: ${props.movieToGoDTO.voteAverage}/10` : "No Rating Yet"}
                            </Label>   */}
                          <h3> Test CoinDetail</h3>
                        </Container>
                    </Card.Content>
                </Card>
            </Container>
        </Form>
    )


}