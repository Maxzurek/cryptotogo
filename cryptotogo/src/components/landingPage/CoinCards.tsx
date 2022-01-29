import { Grid } from "semantic-ui-react"
import { CoinDTO } from "../../models/coin.models"
import CoinDetail from "./CoinDetail"

export default function CoinCards(props: coinCardsProps) {

    const renderGridColumn = () => {

        return (
         // we loop on coingeck Trending data to get detailed information of each coin 
         // and transfer it to CoinDetail component
         props.theCoingeckoDTO.map((theCoinData, index) =>
                <Grid.Column key={index}>
                    <CoinDetail
                        key={index}
                        theCoinDetailDTO={theCoinData}
                    />
                </Grid.Column>
            )
        )
    }

    return (
        <>
            <Grid columns={3} container doubling stackable>
                {renderGridColumn()}
            </Grid>
        </>
    )
}

interface coinCardsProps {
    theCoingeckoDTO: CoinDTO[];

}