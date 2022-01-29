import { NavLink } from "react-router-dom";
import { Grid, Menu, GridRow, GridColumn, Item, Image, Header, Container } from "semantic-ui-react";
import Media from "../mediaProvider/Media";
import SearchBar from "../utilities/SearchBar";
import SelectCurrency from "../utilities/SelectCurrency";

interface MainNavBarProps {
    size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive'
}

MainNavBar.defaultProps = {
    size: 'large'
}

export default function MainNavBar(props: MainNavBarProps) {

    const renderMobileNavBar = () => {
        return (
            <>
                <Grid as={Menu} pointing secondary size="mini" color="blue" verticalAlign="bottom" columns={3}>
                    <GridRow style={{ padding: 0 }}>
                        <GridColumn>
                            <Item as={NavLink} to='/'>
                                <Image src="/images/CryptoToGo_Logo.ico" size="tiny" />
                            </Item>
                        </GridColumn>
                        <GridColumn >
                            <Header textAlign="right" as='p' style={{ padding: 5 }} >Select Currency</Header>
                        </GridColumn>
                        <GridColumn>
                            <SelectCurrency />
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Container>
                    <SearchBar />
                </Container>
            </>
        )
    }

    const renderTabletDesktopNavBar = () => {
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
    }

    return (
        <>
            <Media tablet desktop>
                {renderTabletDesktopNavBar()}
            </Media>
            <Media mobile>
                {renderMobileNavBar()}
            </Media>
        </>
    )
};