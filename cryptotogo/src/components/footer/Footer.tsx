import { Header, Icon, Menu, MenuItem } from "semantic-ui-react";
import SelectTheme from "../utilities/SelectTheme";

interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (
        <Menu fixed="bottom" icon='labeled' size="tiny">
            <MenuItem>
            <Icon name="theme" />
                Choose a theme
            </MenuItem>
            <MenuItem style={{marginLeft: -15, paddingTop: 15}}>
                <SelectTheme />
            </MenuItem>
        </Menu>
    )
};
