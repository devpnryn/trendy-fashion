import { Container, Grid, useMediaQuery, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { products } from '../data'
import SingleProduct from './SingleProduct'
import SingleProductDesktop from './SingleProductDesktop'

function Products() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const renderProducts = products.map(p => (
        <Grid
            item
            key={p.id}
            display='flex'
            alignContent="center"
            justifyContent={"center"}
            flexDirection="column"
            xs={2} sm={4} md={4}>
            {matches ? <SingleProduct product={p} matches={matches} /> : <SingleProductDesktop product={p} matches={matches} />}

        </Grid>
    ))
    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent={"center"}
                sx={{ margin: '10px 4px 10px 4px' }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
            <Box sx={{ p: 8 }}></Box>
        </Container>
    )
}

export default Products