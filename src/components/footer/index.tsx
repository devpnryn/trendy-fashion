import { Facebook, Instagram, Send, Twitter } from '@mui/icons-material'
import { Box, Button, Grid, List, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { FooterTitle, SubscribeTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'

const Footer = () => {
    return (
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' }
            }}>
            <Grid
                container
                spacing={2}
                justifyContent={"center"}
            >
                <Grid item md={6} lg={4}>

                    <FooterTitle variant='body1'>
                        About us
                    </FooterTitle>
                    <Typography variant="caption">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa facere magni iste, praesentium temporibus reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio et odit necessitatibus hic a vitae asperiores itaque accusamus iure corporis!
                    </Typography>
                    <Box sx={{
                        mt: 4,
                        color: Colors.dove_gray
                    }}>
                        <Facebook sx={{ mr: 1 }} />
                        <Twitter sx={{ mr: 1 }} />
                        <Instagram sx={{ mr: 1 }} />
                    </Box>
                </Grid>

                <Grid item md={6} lg={2}>
                    <FooterTitle variant='body1'>information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>About us</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>Order Tracking</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>privacy &amp; policy</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>Terms &amp; conditions</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant='body1'>my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>Login</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>My Cart</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>My Orders</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant='caption'>Wishlist</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant='body1'>news letter</FooterTitle>
                    <Stack>
                        <SubscribeTf color='primary' label='Email address' variant='standard'>
                        </SubscribeTf>

                        <Button
                            startIcon={<Send sx={{ color: Colors.white }} />}
                            sx={{ mt: 4, mb: 4 }}
                            variant='contained'
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer