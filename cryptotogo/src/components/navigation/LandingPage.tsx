import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { coingeckoCoinsTrending } from "../../endpoints";
import { CoinDTO } from "../../models/coin.models";
import CoinCards from "../utilities/CoinCards";
import { fetchCoinInfo } from "../utilities/fetchFunctions";


export default function LandingPage() {

    const [coingeckTrending, setCoingeckTrending] = useState<CoinDTO[]>([]);

    useEffect(() => {

        const fetchData = async () => {

            await axios.get(coingeckoCoinsTrending)
                .then((response) => {

                    response.data.coins.map(async (coin: any) => {

                      const coinDTO: CoinDTO = await fetchCoinInfo(coin.item.id)

                     // console.log(coinDTO)
                      setCoingeckTrending(prevCoinTrending=>[...prevCoinTrending, coinDTO])

                    })

                })
                .catch(error => { return console.log(error) })
        }
        fetchData();

    }, [])

    return (
        <Container>
            <CoinCards theCoingeckoDTO={coingeckTrending} />
        </Container>
    )
};


