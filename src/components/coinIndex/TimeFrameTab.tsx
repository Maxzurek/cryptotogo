import { Menu, MenuItem, MenuItemProps } from "semantic-ui-react";

interface TimeFrameTabProps {
    activeItem: string;
    handleItemClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps): void
}

export default function TimeFrameTab(props: TimeFrameTabProps) {

    return (
        <Menu fluid tabular size='large' widths={10}>
            <MenuItem
                name='1D'
                active={props.activeItem === '1D'}
                onClick={props.handleItemClick}
            />
            <MenuItem
                name='5D'
                active={props.activeItem === '5D'}
                onClick={props.handleItemClick}
            />
            <MenuItem
                name='1M'
                active={props.activeItem === '1M'}
                onClick={props.handleItemClick}
            />
            <MenuItem
                name='6M'
                active={props.activeItem === '6M'}
                onClick={props.handleItemClick}
            />
            <MenuItem
                name='1Y'
                active={props.activeItem === '1Y'}
                onClick={props.handleItemClick}
            />
        </Menu>
    )
};
