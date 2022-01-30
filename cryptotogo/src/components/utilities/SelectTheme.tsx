import { useEffect, useState } from "react";
import { Select } from "semantic-ui-react";
import { ThemeContextProps } from "../../themes/theme.models";
import { DreamerTheme, MovieToGoTheme, SolatisTheme } from "../../themes/themes";
import { withTheme } from "../themeContext/withTheme";

interface SelectThemeProps extends ThemeContextProps {

}

function SelectTheme(props: SelectThemeProps) {

    const [value, setValue] = useState('');

    const themes = [
        { key: '1', value: "MovieToGo", text: 'MovieToGo' },
        { key: '2', value: "Dreamer", text: 'Dreamer' },
        { key: '3', value: "Solaris", text: 'Solaris' },
    ]

    useEffect(() => {
        setValue('MovieToGo');
    }, [])

    const onChangeTheme = (event: React.SyntheticEvent<HTMLElement, Event>, data: any) => {

        setValue(data.value)

        switch (data.value) {
            case 'MovieToGo':
                props.setTheme(MovieToGoTheme)
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