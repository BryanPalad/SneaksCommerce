import React, {useEffect}from 'react'
import { Newsletter, Footer, Banner, Navbar, Features } from '../../components';
import { Box, Link } from '@mui/material';
import {motion} from 'framer-motion';
import aboutUsPic from '../../assets/img/about/a6.jpg';
import appClip from '../../assets/clip/1.mp4';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box>
      <Navbar/>
      <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Banner bannerTitle='#KnowUs' bannerSubtitle='Lorem ipsum dolor sit amet, consectetur' bannerImage='bg-aboutUsBanner'/>
        <Box className='flex flex-col items-center w-full gap-8 px-12 py-20 lg:gap-12 lg:px-24 lg:flex-row'>
           {/* about us pic */}
          <Box className='w-full lg:w-[50%]'>
          <img src={aboutUsPic} alt="about us pic" />
          </Box>
          {/* description side */}
          <Box className='flex flex-col items-center gap-8 w-full lg:items-start lg:w-[50%]'>
          <h4 className='text-4xl lg:text-5xl font-bold font-subtitle'>Who We Are? </h4>
          <h4 className='text-md lg:text-lg font-medium font-main'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum
          </h4>
          <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
          </Box>
        </Box>
        {/* download app */}
        <Box className='flex flex-col gap-12 py-12 justify-center items-center w-full'>
          <h4 className='text-5xl font-bold font-subtitle'>Download Our <Link href='#' className='cursor-pointer'>App</Link></h4>
          <video src={appClip} className='w-[70%] lg:w-[60%] h-[100%] rounded-xl' autoPlay muted loop>
          </video>
        </Box>
        <Features/>
        <Newsletter/>
        <Footer/>
        </motion.div>
    </Box>
   )
}

export default AboutUs