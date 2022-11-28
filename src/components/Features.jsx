import React from 'react'
import { Box } from '@mui/material';
import { featuresData } from '../core/utils/helper';

const Features = () => {
  return (
    <section className="w-full h-auto">
    <Box className="flex justify-around items-center text-center py-12 px-12 flex-wrap">
      {featuresData.map((item, index) => {
        const { title, img, color } = item;
        return (
          <Box className="flex flex-col w-[180px] text-center py-[25px] px-[15px] gap-4 border border-slate-300 rounded-lg mb-4 hover:scale-105 duration-300" key={index}>
            <img src={img} alt="" />
            <h3
              className={`${color} text-black font-medium font-subtitle py-1 px-2 rounded-xl`}
              key={index}
            >
              {title}
            </h3>
          </Box>
        );
      })}
    </Box>
  </section>
  )
}

export default Features