import React, {useEffect} from 'react'
import { Navbar, Newsletter, Footer, Banner } from '../../components'
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { contactusData } from '../../core/utils/helper';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box>
      <Navbar/>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <Banner bannerTitle="#let's_talk" bannerSubtitle='LEAVE A MESSAGE, We love to hear from you' bannerImage='bg-aboutUsBanner'/>
        <Box className='w-full px-12 py-12 lg:px-24'>
          {/* contact us details */}
          <Box className='flex flex-col gap-8 lg:flex-row w-full'>
            {/* left side */}
          <Box className='w-full lg:w-[40%]'>
          <Box className='space-y-4'>
          <h4 className='text-xl font-medium font-subtitle uppercase'>get in touch</h4>
            <h4 className='text-2xl font-medium font-subtitle'>Visit one of our agency locations or contact us today</h4>
            <h4 className='text-2xl font-medium font-subtitle'>Head Office</h4>
          </Box>
            <Box className='mt-6 flex flex-col gap-4'>
            {contactusData.map((item,index) => {
              const {icon, description} = item;
              return (
                <Box className='flex items-center gap-2' key={index}>
                  {icon}
                  <h4 className='text-lg font-main font-normal'>{description}</h4>
                </Box>
              )
            })}
            </Box>
          </Box>
          {/* map side */}
          <Box className='w-full lg:w-[60%]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.3506375311854!2d121.13701541613021!3d14.232756403566068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd625ce7733327%3A0xac86eb1efcead676!2sGran%20Seville%20Village!5e0!3m2!1sen!2sph!4v1668603534977!5m2!1sen!2sph" className='w-full' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Our Location"></iframe>
          </Box>    
          </Box>  
        </Box>
        <Newsletter/>
        <Footer/>
      </motion.div>
    </Box>
  )
}

export default ContactUs