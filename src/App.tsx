import { Box, Container, Divider, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { useEffect } from 'react'
import Appbar from './components/appbar'
import Banner from './components/banner'
import Footer from './components/footer'
import Promotions from './components/promotions'
import SearchBox from './components/serach'
import { UIProvider } from './context/ui'
import AppDrawer from './drawer'
import Products from './products'
import theme, { Colors } from './styles/theme'

function App() {

  useEffect(() => {
    document.title = 'React Material UI'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{ background: "#fff" }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={'flex'} justifyContent="center" sx={{ p: 4 }}><Typography variant='h4'>Our Products</Typography></Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
          {/* <Divider sx={{ pb: 2, color: Colors.secondary }} /> */}
        </UIProvider>
      </Container>
    </ThemeProvider>
  )
}

export default App
