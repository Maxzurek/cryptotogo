import { useEffect, useState } from "react";
import { Dropdown, DropdownItem, DropdownItemProps, DropdownMenu, Icon, Select } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { DreamerTheme, CryptoToGoTheme, SolarizedTheme } from "../../themes/themes";
import { withTheme } from "../themeContext/withTheme";

interface SelectThemeProps extends ThemeContextProps {

}

function SelectTheme(props: SelectThemeProps) {

    const [themeName, setThemeName] = useState('');

    const themes = [
        {
            key: '1',
            value: CryptoToGoTheme.name,
            text: CryptoToGoTheme.name,
            label: { color: CryptoToGoTheme.primaryColor, empty: true, circular: true },
        },
        {
            key: '2',
            value: DreamerTheme.name,
            text: DreamerTheme.name,
            label: { color: DreamerTheme.primaryColor, empty: true, circular: true },
        },
        {
            key: '3',
            value: SolarizedTheme.name,
            text: SolarizedTheme.name,
            label: { color: SolarizedTheme.primaryColor, empty: true, circular: true },
        },
    ]

    useEffect(() => {
        setThemeName(CryptoToGoTheme.name);
    }, [])

    const onChangeTheme = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: DropdownItemProps) => {

        setThemeName(data.value as string)

        switch (data.value) {
            case CryptoToGoTheme.name:
                props.setTheme(CryptoToGoTheme)
                break;
            case DreamerTheme.name:
                props.setTheme(DreamerTheme)
                break;
            case SolarizedTheme.name:
                props.setTheme(SolarizedTheme)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Dropdown
                item
                trigger={<><Icon name='theme' color={props.theme.primaryColor} />{`Themes (${themeName})`}</>}
                icon={null}
            >
                <DropdownMenu>
                    <Dropdown.Menu scrolling>
                        {themes.map((option) => (
                            <DropdownItem {...option} onClick={onChangeTheme}/>
                        ))}
                    </Dropdown.Menu>
                </DropdownMenu>
            </Dropdown>
            {/* <Select fluid options={themes} onChange={onChangeTheme} value={value} /> */}
        </>
    )
};

export default withTheme(SelectTheme)