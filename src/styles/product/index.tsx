import { Button, IconButton } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from '../../animation';
import "@fontsource/montez";

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}))

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '16px'
    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}))

interface ProdcutFavButtonProps {
    isFav?: boolean;
}


export const ProdcutFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== "isFav"
})<ProdcutFavButtonProps>(({ isFav, theme }) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        right: 0,
        top: 0
    }
}))

interface ProductAddToCartProps {
    show?: boolean
}
export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show"
})<ProductAddToCartProps>(({ show, theme }) => ({
    width: '120px',
    fontSize: '12px',
    alignSelf: 'center',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    background: Colors.secondary,
    opacity: 0.9
}))

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

interface ProductActionsWrapperProps {
    show?: boolean
}
export const ProductActionsWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "show"
})<ProductActionsWrapperProps>(({ show, theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: show ? 'visible' : 'none',
        position: "absolute",
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
}));