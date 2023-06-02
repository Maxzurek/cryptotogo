import axios from "axios";
import { coingeckoCoinDataByIdStart, coingeckoCoinDataByIdEnd } from "../../endpoints";
import { CoinDTO } from "../../models/coin.models";

export const fetchCoinInfo = async (id: string) : Promise<CoinDTO> => { // Goingecko get market_data by coin Id

    let coinDTO: CoinDTO = {
        id: "",
        name: "",
        symbol: "",
        market_data: "",
        market_cap_rank: 0,
        thumb: "",
        small: "",
        large: "",
        current_price: undefined
    };

    await axios.get(`${coingeckoCoinDataByIdStart}${id}${coingeckoCoinDataByIdEnd}`)
        .then(response => {

            let data = response.data;
            // We only keep the data we want
            coinDTO.id = data.id;
            coinDTO.name = data.name;
            coinDTO.symbol = data.symbol;
            coinDTO.market_data = data.market_data;
            coinDTO.market_cap_rank = data.market_cap_rank;
            coinDTO.thumb = data.image.thumb;
            coinDTO.small = data.image.small;
            coinDTO.large = data.image.large;
            coinDTO.current_price = data.market_data.current_price;
        })
        .catch(error => console.log(error))

    return coinDTO;
}