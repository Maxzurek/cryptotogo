import { Container, Menu, MenuItem } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { withTheme } from "../themeContext/withTheme";
import SelectTheme from "../utilities/SelectTheme";

interface FooterProps extends ThemeContextProps {

}

function Footer(props: FooterProps) {
    return (
        <Container style={{ paddingTop: 50, position: 'relative' }} fluid>
            <Menu
                icon='labeled'
                size="tiny"
                fluid
                style={{ marginTop: -10, backgroundColor: props.theme.backgroundColor, position: 'absolute' }} >
                <MenuItem style={{ marginLeft: -15, paddingTop: 15 }}>
                    <SelectTheme />
                </MenuItem>
            </Menu>
        </Container>
    )
};

export default withTheme(Footer);