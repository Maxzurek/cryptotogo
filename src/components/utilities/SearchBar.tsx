import axios from "axios"
import { useState, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { Search, SearchProps, SearchResultData } from "semantic-ui-react"
import { coingeckoSearch } from "../../endpoints"
import { CoinDTO } from "../../models/coin.models"
import { fetchCoinInfo } from "./fetchFunctions"

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

const reducer = (state: State, action: Action): State => { // We got a dispatch. Send the appropriate state depending of the action type send by the dispatch
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

export default function SearchBar(props: SearchBarProps) {

    const [timer, setTimer] = useState<NodeJS.Timeout>();
    const [{ loading, results, value }, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const searchCoin = async (keyword: string) => { // coingecko API call to search for coins by keyword

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

            let searchResult: SearchResult[] = [{
                id: "",
                title: "Internal Server Error",
                description: "Please try again later",
                image: ""
            }]

            dispatch({ type: 'FINISH_SEARCH', results: searchResult })
            console.log(error);
        }
    }

    const handleSearchChange = (event: React.MouseEvent<HTMLElement>, data: SearchProps) => { // Search component input changed

        const keyword = data.value;
        dispatch({ type: 'START_SEARCH', query: data.value });

        if (timer) {
            clearTimeout(timer);
            setTimer(undefined);
        }

        setTimer(  //Set a 500ms timer. We want to wait for the user to stop typing to send an API call.
            setTimeout(() => {

                if (!keyword || keyword?.length === 0) {
                    dispatch({ type: 'CLEAN_QUERY' });

                    return;
                }

                searchCoin(keyword);
            }, 500)
        );
    }

    const handleResultSelect = async ( // User selected an item in the result box.
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: SearchResultData) => {

        const selectedResult: SearchResult = data.result;
        const coinDTO: CoinDTO = await fetchCoinInfo(selectedResult.id); // Fetch the coin data needed for our DTO

        dispatch({ type: 'CLEAN_QUERY'})
        navigate('/coin', { state: { coinDTO } }) // We want to send our coinDTO to the page we are navigating to
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