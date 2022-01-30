import { Header, Icon, Menu, MenuItem } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { withTheme } from "../themeContext/withTheme";
import SelectTheme from "../utilities/SelectTheme";

interface FooterProps extends ThemeContextProps {

}

function Footer(props: FooterProps) {
    return (
        <Menu fixed="bottom" icon='labeled' size="tiny">
            <MenuItem>
            <Icon name="theme" color={props.theme.primaryColor}/>
                Choose a theme
            </MenuItem>
            <MenuItem style={{marginLeft: -15, paddingTop: 15}}>
                <SelectTheme />
            </MenuItem>
        </Menu>
    )
};

export default withTheme(Footer);