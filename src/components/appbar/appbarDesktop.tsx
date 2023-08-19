import { Search } from "@mui/icons-material"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useUIContext } from "../../context/ui"
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar"
import Actions from "./actions"

const AppbarDesktop = ({ matches = false }) => {
    const { setShowSearchBox }: any = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppbarContainer >
    )

}
export default AppbarDesktop