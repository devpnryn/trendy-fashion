import { Close, Facebook, Favorite, Instagram, Twitter } from '@mui/icons-material'
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from "@mui/material/styles";
import { Colors } from '../../styles/theme'
import { useTheme } from '@mui/material/styles'
import { Product, ProductImage } from '../../styles/product';
import IncDec from '../ui';

function SlideTransition(props: any) {
    return <Slide direction='down' {...props} />
}

const ProductDetailsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4)
}))

const ProductDetailsInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}))

const ProductDetails = ({ open, onClose, product }: any) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog
            TransitionComponent={SlideTransition}
            // variant="permanent"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{
                background: Colors.secondary
            }}>
                <Box display={'flex'}
                    justifyContent='space-between'
                    alignItems={'center'} >
                    Product in Detail
                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailsWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{
                        mr: 4
                    }}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailsInfoWrapper>
                        <Typography variant='subtitle1'>SKU 123</Typography>
                        <Typography variant='subtitle1'>Availability: 5 in stock</Typography>
                        <Typography sx={{ lineHeight: 2 }} variant='h4'>{product.name}</Typography>
                        <Typography variant='body1'>
                            {product.description}
                            {product.dessciption}
                            {product.dessciption}
                        </Typography>
                        <Box sx={{ mt: 4 }}
                            display="flex"
                            alignItems="center"
                            justifyContent={"space-between"}
                        >
                            <IncDec />
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                        <Box sx={{ mt: 4, color: Colors.light }}
                            display='flex'
                            alignItems={'center'}
                        >
                            <Favorite sx={{ mr: 2 }} />
                            Add to wishlist
                        </Box>
                        <Box sx={{ mt: 4, color: Colors.light }}>
                            <Facebook />
                            <Twitter sx={{ pl: theme.spacing(4) }} />
                            <Instagram sx={{ pl: theme.spacing(4) }} />
                        </Box>
                    </ProductDetailsInfoWrapper>
                </ProductDetailsWrapper>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDetails