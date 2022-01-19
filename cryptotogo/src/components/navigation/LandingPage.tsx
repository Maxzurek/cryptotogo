import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { coingeckoCoinsTrending } from "../../endpoints";
import { CoinDTO } from "../../models/coin.models";
import CoinCards from "../CoinCards";

interface LandingPageProps{

}

export default function LandingPage(props: LandingPageProps) {
    
    const [coingeckTrending, setCoingeckTrending] = useState<CoinDTO[]>([]);

    useEffect(() => {

        const fetchCoinData = async () => {

            await axios.get(coingeckoCoinsTrending)
                .then((response) => {

                    let coinTrending = response.data;
                    if (coinTrending === "") {
                        coinTrending = undefined;
                    }
                    setCoingeckTrending(coinTrending)
                })
                .catch(error => { return console.log(error) })
        }
        fetchCoinData();

    }, [])

    return (
       <Container>
         <CoinCards theCoingeckoDTO = {coingeckTrending}/>
       </Container>
    )
};
