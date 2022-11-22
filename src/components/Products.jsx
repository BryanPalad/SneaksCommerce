import React from 'react'
import { Box } from '@mui/material';
import { AiFillStar } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

const Products = (props) => {
    const {productsArray, title, description} = props;

    const Stars = () => {
        var star = [];
        for (let i = 0; i <= 4; i++) {
          star.push(<AiFillStar className='text-yellow'/>)
        }
       return star;
      }

  return (
       <section className='flex flex-col items-center justify-center w-full mt-12 lg:px-24 px-8'>
       <Box className='flex flex-col text-center gap-4 mb-8'>
       <h4 className='text-4xl font-semibold font-subtitle lg:text-6xl'>{title}</h4>
       <h4 className='text-lg font-normal font-main lg:text-xl'>{description}</h4>
       </Box>
 
       {/* images */}
       <Box className='flex items-center justify-between flex-wrap'>
         {productsArray.map((item, index) => {
           const {title, img, price, brand} = item;
           return (
             <Box className='relative flex flex-col w-full md:w-[48%] lg:w-[23%] px-4 py-4 border border-black-300 mx-1 my-4 rounded-xl gap-2 hover:shadow-lg hover:shadow-blue-300/50 duration-300' key={index}>
               <img src={img} alt="" className='rounded-xl'/>
               {/* details */}
               <Box className='flex flex-col'>
               <h3 className='font-main text-lg'>{brand}</h3>
                 <Box className='flex'>
                 <Stars/>
                 </Box>
               <h3 className='text-xl font-semibold font-subtitle'>{title}</h3>
               <h3 className='text-xl text-red mt-4 font-medium'>₱{price}</h3>
               </Box>
               <Box className='absolute bottom-0 right-0 mb-4 mr-4 bg-button py-2.5 px-2.5 rounded-full cursor-pointer'>
                 <BsCart className='text-2xl font-bold text-white'/>
               </Box>
             </Box>
           )
         })}
       </Box>
     </section>
  )
}

export default Products