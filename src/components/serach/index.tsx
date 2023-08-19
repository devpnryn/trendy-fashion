import { Close, Search } from "@mui/icons-material";
import { IconButton, Slide, Typography } from "@mui/material";
import { useUIContext } from '../../context/ui'
import { SearchBoxContainer, SearchField } from "../../styles/search";


const SearchBox = () => {
    const { showSearchBox, setShowSearchBox } = useUIContext();
    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color="secondary"
                    variant="standard"
                    fullWidth
                    placeholder="search..." />
                <IconButton>
                    <Search sx={{
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                        color="secondary"
                    />
                </IconButton>
                <IconButton sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }} onClick={() => setShowSearchBox(false)}>
                    <Close sx={{
                        fontSize: '4rem'
                    }}
                        color="secondary"
                    />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default SearchBox