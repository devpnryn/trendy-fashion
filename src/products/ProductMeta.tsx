import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../styles/product'

export const ProductMeta = ({ product, matches }: any) => {
    return (
        <ProductMetaWrapper>
            <Typography
                variant={matches ? 'subtitle1' : 'h5'}
                lineHeight={2}
                textOverflow="ellipsis"
            >
                {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    )
}
