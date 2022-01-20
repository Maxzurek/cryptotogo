import { useContext } from "react";
import { Container, Dimmer, Header, Loader, Segment } from "semantic-ui-react";
import AppDataContext from "../contexts/AppDataContext";
import CoinCards from "../utilities/CoinCards";


export default function LandingPage() {

    const { coingeckTrending, isLoadingData, errorMessage } = useContext(AppDataContext);

    return (
        <>
            <br />
            <Header size="huge" color="blue" textAlign="center">Top 7 Best Trending Coins</Header>
            <br />
            <Container>
                <Dimmer active={isLoadingData}>
                    <Loader>Loading</Loader>
                </Dimmer>
                {errorMessage ? "Internal server error" : <CoinCards theCoingeckoDTO={coingeckTrending} />}
            </Container>
        </>
    )
};


