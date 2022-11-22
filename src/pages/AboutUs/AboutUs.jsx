import React from 'react'
import { Newsletter, Footer } from '../../components';
import { Box } from '@mui/material';
import {motion} from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
    <Box>
        <Newsletter/>
        <Footer/>
    </Box>
    </motion.div>)
}

export default AboutUs