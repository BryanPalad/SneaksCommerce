import React, {useEffect, useState} from "react";
import { Box } from "@mui/material";
import { Footer, Navbar, Newsletter } from "../../components";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { allProducts, shoeSizes } from "../../core/utils/helper";
import { addExpense } from "../../core/redux/cartSlice";
import { useDispatch } from "react-redux";
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';

const ProductDetails = () => {
  const paramsId = useParams(); 
  var parsedId = parseInt(paramsId);
  const dispatch = useDispatch();
  const filtered = allProducts.filter(product => product.id == paramsId.id);
  const product = filtered[0];

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(39);

  const handleSize = (e) => {
    setSize(prevState => prevState = e.target.value)
  }

  const handleQuantity = (e) => {
    setQuantity(prevState => prevState = e.target.value);
  }

  const addToCart = (id, img, brand, title, origPrice) =>{
    const data = {
        id,
        img,
        brand,
        title,
        origPrice,
        quantity,
        size,
    }
    dispatch(addExpense(data))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box className='mt-12'>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className="flex flex-col justify-between items-center gap-8 px-12 lg:px-24 h-auto w-full lg:h-[90vh] lg:gap-8 lg:flex-row">
          
          {/* left side */}
          <Box className='flex flex-col w-full lg:w-[40%] space-y-1'>
            <img src={filtered[0].img} alt="" className="lg:w-[80%]"/>
            <Box className='flex justify-between lg:justify-start space-x-1'>
              <Box className='basis-[24%] lg:basis-[19.5%]'>
              <img src={filtered[0].img} alt="" className=""/>
              </Box>
              <Box className='basis-[24%] lg:basis-[19.5%]'>
              <img src={filtered[0].img} alt="" className=""/>
              </Box>
              <Box className='basis-[24%] lg:basis-[19.5%]'>
              <img src={filtered[0].img} alt="" className=""/>
              </Box>
              <Box className='basis-[24%] lg:basis-[19.5%]'>
              <img src={filtered[0].img} alt="" className=""/>
              </Box>
            </Box>
          </Box>
          {/* right side */}
          <Box className='flex flex-col space-y-2 w-full lg:w-[60%]'>
            <h4 className="text-2xl lg:text-3xl font-subtitle font-semibold">{product.title}</h4>
            <h4 className="text lg lg:text-xl font-normal font-subtitle">{product.brand}</h4>
            <h4 className="text-xl lg:text-2xl font-subtitle text-red">₱{product.origPrice}</h4>
            <input type="number" min='1' className='w-[80px] border border-black px-1 py-1' value={quantity} onChange={handleQuantity}/>
          
            <h4 className="text-xl lg:text-xl font-subtitle">Select Size</h4>
            <Box className="flex flex-col items-start space-x-0 space-y-2 lg:items-center lg:space-x-4 lg:space-y-0 lg:flex-row">
            <select name="" id="" className='w-[80px] border border-black px-1 py-1' value={size} onChange={(e)=>handleSize(e)}>
              {shoeSizes.map((item, index) => {
                return (
                  <>
                  <option key={index}>{item}</option>
                  </>
                )
              })}
            </select>
            <button type='button' className="w-[120px] bg-button px-2 py-2 rounded-lg text-white font-medium font-subtitle" onClick={() => addToCart(product.id, product.img, product.brand, product.title, product.origPrice)}>Add To Cart</button>
            </Box>
            <h4 className="text-xl lg:text-2xl text-black font-subtitle pt-8">~Product Details~</h4>
            <h4 className="text-lg lg:text-xl font-main font-normal text-justify">{product.description}</h4>
          </Box>

        </Box>
        <Newsletter />
        <Footer />
      </motion.div>
    </Box>
  );
};

export default ProductDetails;
