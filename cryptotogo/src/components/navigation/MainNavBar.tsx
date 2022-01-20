import { NavLink } from "react-router-dom";
import { Grid, Menu, GridRow, GridColumn, Item, Image } from "semantic-ui-react";
import SearchBar from "../utilities/SearchBar";

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
                <GridColumn width={4}>
                </GridColumn>
            </GridRow>
        </Grid>
    )
};
