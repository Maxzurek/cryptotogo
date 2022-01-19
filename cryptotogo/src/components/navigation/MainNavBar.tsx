import { NavLink } from "react-router-dom";
import { Grid, Menu, GridRow, GridColumn, Item, Header } from "semantic-ui-react";
import SearchBar from "../utilities/SearchBar";

interface MainNavBarProps {

}

export default function MainNavBar(props: MainNavBarProps) {
    return (
        <Grid as={Menu} stackable pointing secondary size='large' icon='labeled' color="blue" verticalAlign="bottom">
            <GridRow style={{ padding: 0 }}>
                <GridColumn width={2}>
                    <Item as={NavLink} to='/'>
                        <Header>Home</Header>
                    </Item>
                </GridColumn>
                <GridColumn width={4}>
                </GridColumn>
                <GridColumn width={6}>
                    <SearchBar />
                </GridColumn>
                <GridColumn width={4}>
                <Item as={NavLink} to='/coin'>
                        <Header>TEST REMOVE (to /coin)</Header>
                    </Item>
                </GridColumn>
            </GridRow>
        </Grid>
    )
};
