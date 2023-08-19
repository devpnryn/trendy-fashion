import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner'

const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant='h6' >Huge Collections</Typography>
                <BannerTitle variant='h2'>
                    New Bags
                </BannerTitle>
                <BannerDescription variant='subtitle1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur soluta ullam, quae ipsum provident!
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )

}

export default Banner;