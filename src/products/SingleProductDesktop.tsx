import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import ProductDetails from "../components/productdetails";
import useDialogModel from "../hooks/useDialogModel";
import { ProdcutFavButton, Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductImage } from "../styles/product";
import { ProductMeta } from "./ProductMeta";

function SingleProductDesktop({ product, matches }: any) {
    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    const [ProductDetailsDialog, showProductDetailDialog] = useDialogModel(ProductDetails)

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                <ProdcutFavButton >
                    <Favorite />
                </ProdcutFavButton>
                {showOptions && <ProductAddToCart variant="contained" show={showOptions}>Add to Cart</ProductAddToCart>}
                <ProductActionsWrapper show={showOptions}>
                    <Stack direction="column">

                        <ProductActionButton>
                            <Share color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreen color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailsDialog product={product} />
        </>
    )
}

export default SingleProductDesktop