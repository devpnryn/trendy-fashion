import { Menu, Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useUIContext } from "../../context/ui"
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import Actions from "./actions"


const AppbarMobile = ({ matches = false }) => {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant='h4'>
                My Bags
            </AppbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <Search />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}

export default AppbarMobile