import React, {useState} from 'react'
import { Box } from '@mui/material';
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import {addExpense} from '../core/redux/cartSlice';
import { NavLink } from 'react-router-dom';

const Products = (props) => {
  const dispatch = useDispatch();
    const {productsArray, title, description} = props;

    const Stars = () => {
        var star = [];
        for (let i = 0; i <= 4; i++) {
          star.push(<AiFillStar className='text-yellow'/>)
        }
       return star;
      }
      
      const addToCart = (id, img, brand, title, origPrice) =>{
        const data = {
            id,
            img,
            brand,
            title,
            origPrice,
            quantity: 1,
            size: 39
        }
        dispatch(addExpense(data))
      }
  return (
       <section className='flex flex-col items-center justify-center w-full mt-12 lg:px-24 px-8'>
       <Box className='flex flex-col text-center gap-4 mb-8'>
       <h4 className='text-4xl font-semibold font-subtitle lg:text-6xl'>{title}</h4>
       <h4 className='text-lg font-normal font-main lg:text-xl'>{description}</h4>
       </Box>
 
       {/* images */}
       <Box className='flex items-center justify-between flex-wrap cursor-pointer'>
         {productsArray.map((item, index) => {
           const {id, title, img, origPrice, brand} = item;
           return (
             <Box className='relative flex flex-col w-full md:w-[48%] lg:w-[23%] px-4 py-4 border border-black-300 mx-1 my-4 rounded-xl gap-2 hover:shadow-lg hover:shadow-blue-300/50 duration-300' key={index}>
              <NavLink to={`/productdetails/${id}`}>
               <img src={img} alt="" className='rounded-xl w-[100%] h-[100%]' value={img}/>
               {/* details */}
               <Box className='flex flex-col'>
               <h3 className='font-main text-lg' value={brand}>{brand}</h3>
                 <Box className='flex'>
                 <Stars/>
                 </Box>
               <h3 className='text-xl font-semibold font-subtitle' value={title}>{title}</h3>
               <h3 className='text-xl text-red mt-4 font-medium' value={origPrice}>₱{origPrice}</h3>
               </Box>
               </NavLink>
               <Box onClick={() => addToCart(id, img, brand, title, origPrice)} className='absolute bottom-0 right-0 mb-4 mr-4 bg-button py-2.5 px-2.5 rounded-full cursor-pointer'>
                 <AiOutlinePlus className='text-2xl font-bold text-white'/>
               </Box>
             </Box>
           )
         })}
       </Box>
     </section>
  )
}

export default Products