import { NavLink } from "react-router-dom";
import { Grid, Menu, GridRow, GridColumn, Item, Image, Header, Label } from "semantic-ui-react";
import SearchBar from "../utilities/SearchBar";
import SelectCurrency from "../utilities/SelectCurrency";

interface MainNavBarProps {
    size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive'
}

MainNavBar.defaultProps = {
    size: 'large'
}

export default function MainNavBar(props: MainNavBarProps) {
    return (
        <Grid as={Menu} stackable pointing secondary size={props.size} color="blue" verticalAlign="bottom">
            <GridRow style={{ padding: 0 }}>
                <GridColumn width={2}>
                    <Item as={NavLink} to='/'>
                        <Image src="/images/CryptoToGo_Logo.ico" size="small" />
                    </Item>
                </GridColumn>
                <GridColumn width={3}>
                </GridColumn>
                <GridColumn width={6}>
                    <SearchBar />
                </GridColumn>
                <GridColumn width={3}>
                    <Header textAlign="right" as='h3' style={{ padding: 5 }} >Select Currency</Header>
                </GridColumn>
                <GridColumn width={2}>
                    <SelectCurrency />
                </GridColumn>
            </GridRow>
        </Grid>
    )
};
