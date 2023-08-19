import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import { Colors } from '../../styles/theme';

const Actions = ({ matches = false }) => {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Component>
            <MyList type="row">
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <ShoppingCart />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
            </MyList>
        </Component>
    )
}


export default Actions