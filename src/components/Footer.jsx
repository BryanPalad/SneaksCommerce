import React from 'react'
import { Box, Link } from '@mui/material';
import logo from '../assets/img/logo.PNG';
import { socialIcons, aboutUsLinks, myAccountLinks } from '../core/redux/utils/helper';
import appstore from '../assets/img/pay/app.jpg';
import playstore from '../assets/img/pay/play.jpg';
import payment from '../assets/img/pay/pay.png';

const Footer = () => {
  return (
    <section className='mt-12 mb-12'>
      {/* contact us details */}
      <Box className='flex flex-wrap justify-between px-24 gap-8'>
        {/* 1st column */}
        <Box className='flex flex-col items-start'>
          <img src={logo} alt="footer logo" className='h-[40%] w-[20%]'/>
          {/* contact us details */}
          <Box className='mb-6 mt-4'>
          <h4 className='text-xl font-main font-semibold mb-4'>Contact Us</h4>
          <p className='font-medium text-lg'>Address: <span className='font-normal'>Brgy. Banlic Cabuyao Laguna</span></p>
          <p className='font-medium text-lg'>Phone: <span className='font-normal'>+63-945-560-2846 / +63-912-345-6789</span></p>
          <p className='font-medium text-lg'>Office Hours: <span className='font-normal'>9:00 am to 5:00 pm Mon-Sat</span></p>
          </Box>
          {/* follow us details */}
          <Box>
          <h4 className='text-xl font-main font-semibold mb-4'>Follow us</h4>
            <Box className='flex space-x-2'>
            {socialIcons.map((item, index) => {
              const {icon} = item;
              return (
                <Box>
                  <Link key={index}>{icon}</Link>
                </Box>
              )
            })}
            </Box>
          </Box>
        </Box>
        {/* 2nd column */}
        <Box className='flex flex-col items-start'>
          {/* About us details */}
          <h4 className='text-xl font-main font-semibold mb-4'>About</h4>
            {aboutUsLinks.map((item, index) => {
              const {title, link} = item;
              return (<>
              <Link key={index} href='#' color='inherit' underline='none' className='hover:text-button duration-300 text-lg font-main'>{title}</Link>
              </>)
            })}
        </Box>
        {/* 3rd column */}
        <Box className='flex flex-col items-start'>
          {/* My acount details */}
          <h4 className='text-xl font-main font-semibold mb-4'>My Account</h4>
            {myAccountLinks.map((item, index) => {
              const {title, link} = item;
              return (<>
              <Link key={index} href='#' color='inherit' underline='none' className='hover:text-button duration-300 text-lg font-main'>{title}</Link>
              </>)
            })}
        </Box>
        {/* 4th column */}
        <Box className='flex flex-col items-start'>
          {/* install app details */}
          <h4 className='text-xl font-main font-semibold mb-4'>Install App</h4>
          <p className='text-lg font-main'>From Google Play or App Store</p>
          {/* installation */}
           <Box className='flex flex-col sm:flex-row gap-1 mt-2 mb-6'>
            <img src={playstore} alt="playstore" className=' border border-black rounded-xl'/>
            <img src={appstore} alt="appstore" className=' border border-black rounded-xl'/>
           </Box>
          {/* payment details */}
           <p className='text-lg font-main mb-2'>Secured Payments</p>
           <img src={payment} alt="payment" />
        </Box>
      </Box>
      <Box className='w-full text-center mt-8'>
      <p className='font-subtitle'>© 2022 Sneaks Ecommerce. All rights reserved - Bryan Palad </p>
      </Box>
    </section>
  )
}

export default Footer