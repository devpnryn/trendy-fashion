import { Close } from '@mui/icons-material';
import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { lighten } from 'polished';
import { useUIContext } from '../context/ui'
import { DrawerCloseButton } from '../styles/appbar';
import { Colors } from '../styles/theme';

const AppDrawer = () => {

    const { drawerOpen, setDrawerOpen }: any = useUIContext();

    return (
        <>
            {drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <Close sx={{
                    fontSize: '2.5em',
                    color: lighten(0.09, Colors.secondary),
                }} />
            </DrawerCloseButton>}
            <Drawer open={drawerOpen}>
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle' />
                    <ListItemButton>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle' />
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle' />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle' />
                    <ListItemButton>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItemButton>
                    <Divider variant='middle' />
                </List>
            </Drawer>
        </>

    )
}

export default AppDrawer