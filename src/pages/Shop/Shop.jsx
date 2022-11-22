import React from 'react'
import { Newsletter, Footer, Navbar, Banner, Products } from '../../components';
import { Box } from '@mui/material';
import {motion} from 'framer-motion';
import { allProducts } from '../../core/redux/utils/helper';
const Shop = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <Box>
        <Navbar/>
        <Banner bannerTitle='#stayhome' bannerSubtitle='Save more with coupons & up to 70% off!' bannerImage='bg-shopBanner' />
        <Products productsArray={allProducts}/>
        <Newsletter/>
        <Footer/>
    </Box>
    </motion.div>)
}

export default Shop