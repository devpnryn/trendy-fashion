import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import { Colors } from '../../styles/theme';


const Actions = ({ matches = false }) => {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    const listItemIconStyle = {
        display: 'flex',
        justifyContent: 'center',
        color: matches ? Colors.secondary : Colors.primary
    } as const;

    return (
        <Component>
            <MyList type="row">
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <ShoppingCart />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={listItemIconStyle}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
            </MyList>
        </Component>
    )
}


export default Actions