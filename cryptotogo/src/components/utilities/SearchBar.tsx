import axios from "axios"
import { useState, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { Search, SearchProps, SearchResultData } from "semantic-ui-react"
import { coingeckoCoinDataByIdEnd, coingeckoCoinDataByIdStart, coingeckoSearch } from "../../endpoints"
import { CoinDTO, CoinSearchDTO } from "../../models/coin.models"

interface SearchResult {
    id: string;
    title: string;
    description: string;
    image: string;
}

type State = {
    loading: boolean
    results: SearchResult[]
    value: string | undefined
}

type Action =
    | { type: 'START_SEARCH', query: string | undefined }
    | { type: 'FINISH_SEARCH', results: SearchResult[] }
    | { type: 'UPDATE_SELECTION', selection: string }
    | { type: 'CLEAN_QUERY' }

const initialState: State = {
    loading: false,
    results: [],
    value: '',
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return {
                ...state,
                loading: false,
                results: action.results,
            }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }
        default:
            throw new Error()
    }
}

interface SearchBarProps {
    size?: "mini" | "tiny" | "small" | "large" | "big" | "massive" | "huge" | undefined
}

SearchBar.defaultProps = {
    size: "large"
}

export default function SearchBar(props: SearchBarProps) {

    const [timer, setTimer] = useState<NodeJS.Timeout>();
    const [{ loading, results, value }, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const searchCoin = async (keyword: string) => {

        try {

            let searchResults: SearchResult[] = [];
            let response = await axios.get(coingeckoSearch + keyword);
            let coins = response.data.coins;

            coins.map(async (coin: any, index: number) => {

                let searchResult: SearchResult = {
                    id: "",
                    title: "",
                    description: "",
                    image: ""
                }

                searchResult.id = coin.id;
                searchResult.title = coin.name;
                searchResult.description = `(${coin.symbol})`;
                searchResult.image = coin.large;

                searchResults.push(searchResult);

            })

            dispatch({ type: 'FINISH_SEARCH', results: searchResults })
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSearchChange = (event: React.MouseEvent<HTMLElement>, data: SearchProps) => {

        const keyword = data.value;
        dispatch({ type: 'START_SEARCH', query: data.value });

        if (timer) {
            clearTimeout(timer);
            setTimer(undefined);
        }

        setTimer(
            setTimeout(() => {

                if (!keyword || keyword?.length === 0) {
                    dispatch({ type: 'CLEAN_QUERY' });

                    return;
                }

                searchCoin(keyword);
            }, 500)
        );
    }

    const fetchCoinInfo = async (id: string): Promise<CoinDTO> => {

        let coinDTO: CoinDTO = {
            id: "",
            name: "",
            symbol: "",
            market_cap_rank: 0,
            thumb: "",
            small: "",
            large: "",
            current_price: undefined
        };

        await axios.get(`${coingeckoCoinDataByIdStart}${id}${coingeckoCoinDataByIdEnd}`)
            .then(response => {

                let data = response.data;

                coinDTO.id = data.id;
                coinDTO.name = data.name;
                coinDTO.symbol = data.symbol;
                coinDTO.market_cap_rank = data.market_cap_rank;
                coinDTO.thumb = data.image.thumb;
                coinDTO.small = data.image.small;
                coinDTO.large = data.image.large;
                coinDTO.current_price = data.market_data.current_price;
            })
            .catch(error => console.log(error))

        return coinDTO;
    }

    const handleResultSelect = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: SearchResultData) => {

        const selectedResult: SearchResult = data.result;
        const coinDTO: CoinDTO = await fetchCoinInfo(selectedResult.id);

        navigate('/coin', { state: { coinDTO } })
    }

    return (
        <Search
            fluid
            input={{ fluid: true }}
            placeholder='Search coins'
            results={results}
            value={value}
            loading={loading}
            size={props.size}
            onSearchChange={handleSearchChange}
            onResultSelect={handleResultSelect}
        />
    )
};
