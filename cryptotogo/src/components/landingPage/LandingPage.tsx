import { useContext } from "react";
import { Container, Dimmer, Header, Loader } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import AppDataContext from "../appDataContext/AppDataContext";
import { withTheme } from "../themeContext/withTheme";
import CoinCards from "./CoinCards";

interface LandingPageProps extends ThemeContextProps{

}

function LandingPage(props: LandingPageProps) {

    //Get coingeck Trending data, isLoadingData value and error Messages from  AppDataContext
    const { coingeckTrending, isLoadingData, errorMessage } = useContext(AppDataContext);

    return (
        <Container>
            <Header 
                size="huge" 
                color={props.theme.primaryColor}
                textAlign="center" 
                style={{marginTop: 30, marginBottom: 30}}>
                    Top 6 Trending Coins
            </Header>
            <Container>
                <Dimmer active={isLoadingData}>
                    <Loader>Loading</Loader>
                </Dimmer>
                {/* if there is no error, call the CoinCards component and transfer coingeck Trending data  */}
                {errorMessage ? "Internal server error" : <CoinCards theCoingeckoDTO={coingeckTrending} />}
            </Container>
        </Container>
    )
};

export default withTheme(LandingPage);