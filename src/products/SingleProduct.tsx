import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ProductDetails from "../components/productdetails";
import useDialogModel from "../hooks/useDialogModel";
import { ProdcutFavButton, Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductImage } from "../styles/product";
import { ProductMeta } from "./ProductMeta";

function SingleProduct({ product, matches }: any) {

    const [ProductDetailsDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModel(ProductDetails)
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProdcutFavButton isFav={0}>
                            <Favorite />
                        </ProdcutFavButton>
                        <ProductActionButton>
                            <Share color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreen color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
            <ProductDetailsDialog product={product} />
        </>
    )
}

export default SingleProduct