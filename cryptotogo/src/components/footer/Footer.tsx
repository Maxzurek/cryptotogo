import { Container, Icon, Menu, MenuItem } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { withTheme } from "../themeContext/withTheme";
import SelectTheme from "../utilities/SelectTheme";

interface FooterProps extends ThemeContextProps {

}

function Footer(props: FooterProps) {
    return (
        <Container style={{paddingTop: 80}}>
            <Menu fixed="bottom" icon='labeled' size="tiny" style={{ marginTop: -10 }}>
                <MenuItem>
                    <Icon name="theme" color={props.theme.primaryColor} />
                    Choose a theme
                </MenuItem>
                <MenuItem style={{ marginLeft: -15, paddingTop: 15 }}>
                    <SelectTheme />
                </MenuItem>
            </Menu>
        </Container>
    )
};

export default withTheme(Footer);