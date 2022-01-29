import { useContext } from "react";
import { Container, Dimmer, Header, Loader } from "semantic-ui-react";
import AppDataContext from "../appDataContext/AppDataContext";
import CoinCards from "../utilities/CoinCards";


export default function LandingPage() {

    //Get coingeck Trending data, isLoadingData value and error Messages from  AppDataContext
    const { coingeckTrending, isLoadingData, errorMessage } = useContext(AppDataContext);

    return (
        <>
            <Header size="huge" color="blue" textAlign="center" style={{marginTop: 30, marginBottom: 30}}>Top 6 Best Trending Coins</Header>
            <Container>
                <Dimmer active={isLoadingData}>
                    <Loader>Loading</Loader>
                </Dimmer>
                {/* if there is no error, call the CoinCards component and transfer coingeck Trending data  */}
                {errorMessage ? "Internal server error" : <CoinCards theCoingeckoDTO={coingeckTrending} />}
            </Container>
        </>
    )
};


