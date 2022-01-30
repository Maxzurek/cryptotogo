import { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { DreamerTheme, PrimaryTheme, SolatisTheme } from "../../themes/themes";
import { withTheme } from "../themeContext/withTheme";

interface SelectThemeProps extends ThemeContextProps {

}

function SelectTheme(props: SelectThemeProps) {

    const [value, setValue] = useState('');

    const themes = [
        { key: '1', value: "Primary", text: 'Primary' },
        { key: '2', value: "Dreamer", text: 'Dreamer' },
        { key: '3', value: "Solaris", text: 'Solaris' },
    ]

    useEffect(() => {
        setValue('Primary');
    }, [])

    const onChangeTheme = (event: React.SyntheticEvent<HTMLElement, Event>, data: any) => {

        setValue(data.value)

        switch (data.value) {
            case 'Primary':
                props.setTheme(PrimaryTheme)
                break;
            case 'Dreamer':
                props.setTheme(DreamerTheme)
                break;
            case 'Solaris':
                props.setTheme(SolatisTheme)
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