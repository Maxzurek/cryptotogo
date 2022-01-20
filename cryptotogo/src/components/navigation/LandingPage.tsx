import { useContext } from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import AppDataContext from "../contexts/AppDataContext";
import CoinCards from "../utilities/CoinCards";


export default function LandingPage() {

    const { coingeckTrending, isLoadingData, errorMessage } = useContext(AppDataContext);

    return (
        <Container>
            <Dimmer active={isLoadingData}>
                <Loader>Loading</Loader>
            </Dimmer>
            {errorMessage ? "Internal server error" : <CoinCards theCoingeckoDTO={coingeckTrending} />}
        </Container>
    )
};


