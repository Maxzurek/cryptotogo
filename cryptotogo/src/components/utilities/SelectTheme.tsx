import { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { DreamerTheme, CryptoToGoTheme, SolarizedTheme } from "../../themes/themes";
import { withTheme } from "../themeContext/withTheme";

interface SelectThemeProps extends ThemeContextProps {

}

function SelectTheme(props: SelectThemeProps) {

    const [value, setValue] = useState('');

    const themes = [
        { key: '1', value: CryptoToGoTheme.name, text: CryptoToGoTheme.name },
        { key: '2', value: DreamerTheme.name, text: DreamerTheme.name },
        { key: '3', value: SolarizedTheme.name, text: SolarizedTheme.name },
    ]

    useEffect(() => {
        setValue(CryptoToGoTheme.name);
    }, [])

    const onChangeTheme = (event: React.SyntheticEvent<HTMLElement, Event>, data: any) => {

        setValue(data.value)

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
            <Select fluid options={themes} onChange={onChangeTheme} value={value} />
        </>
    )
};

export default withTheme(SelectTheme)