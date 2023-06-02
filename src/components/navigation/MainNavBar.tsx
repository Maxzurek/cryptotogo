import { NavLink } from "react-router-dom";
import { Grid, Menu, GridRow, GridColumn, Item, Image, Header, Container } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import Media from "../mediaContext/Media";
import { withTheme } from "../themeContext/withTheme";
import SearchBar from "../utilities/SearchBar";
import SelectCurrency from "../utilities/SelectCurrency";

interface MainNavBarProps extends ThemeContextProps {
    size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive'
}

function MainNavBar(props: MainNavBarProps) {

    const renderMobileNavBar = () => {
        return (
            <Container fluid style={{ backgroundColor: props.theme.backgroundColor }}>
                <Grid
                    as={Menu}
                    pointing
                    secondary
                    size="mini"
                    color={props.theme.primaryColor}
                    verticalAlign="bottom"
                    columns={3}
                >
                    <GridRow style={{ padding: 0 }}>
                        <GridColumn>
                            <Item as={NavLink} to='/'>
                                <Image src="/images/CryptoToGo_Logo.ico" size="tiny" />
                            </Item>
                        </GridColumn>
                        <GridColumn >
                            <Header textAlign="right" as='p' color={props.theme.primaryColor}>
                                Select a Currency
                            </Header>
                        </GridColumn>
                        <GridColumn>
                            <SelectCurrency />
                        </GridColumn>
                    </GridRow>
                </Grid>
                <Container>
                    <SearchBar />
                </Container>
            </Container>
        )
    }

    const renderTabletDesktopNavBar = () => {
        return (
            <Container fluid style={{ backgroundColor: props.theme.backgroundColor }}>
                <Grid
                    as={Menu}
                    stackable
                    pointing
                    secondary
                    size={props.size}
                    color={props.theme.primaryColor}
                    verticalAlign="bottom"
                >
                    <GridRow style={{ padding: 0 }}>
                        <GridColumn width={2}>
                            <Item as={NavLink} to='/'>
                                <Image src="/images/CryptoToGo_Logo.ico" size="small" />
                            </Item>
                        </GridColumn>
                        <GridColumn width={3}>
                        </GridColumn>
                        <GridColumn width={6}>
                            <SearchBar size="huge" />
                        </GridColumn>
                        <GridColumn width={3}>
                            <Header as='h3' textAlign="right" style={{ padding: 5 }} color={props.theme.primaryColor}>
                                Select a Currency
                            </Header>
                        </GridColumn>
                        <GridColumn width={2}>
                            <SelectCurrency />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
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

export default withTheme(MainNavBar)