import React from 'react'
import { Box } from '@mui/material'

const Banner = (props) => {
    const {bannerTitle, bannerSubtitle, bannerImage} = props;
  return (
    <Box className={`flex flex-col justify-center items-center w-full ${bannerImage} bg-cover bg-center mt-24 h-[40vh] gap-2`}>
    <h4 className='text-4xl lg:text-6xl text-white font-body font-semibold'>{bannerTitle}</h4>
    <p className='text-md lg:text-lg text-white font-main font-light'>{bannerSubtitle}</p>
    </Box>
  )
}

export default Banner