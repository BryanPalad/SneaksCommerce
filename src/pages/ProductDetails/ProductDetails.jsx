import React from "react";
import { Box } from "@mui/material";
import { Footer, Navbar, Newsletter } from "../../components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { allProducts } from "../../core/utils/helper";

const ProductDetails = () => {
  const paramsId = useParams();
  const filtered = allProducts.filter(product => product.id == paramsId.id);

  return (
    <Box>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box className="flex justify-center items-center mt-24 px-24 h-[80vh] w-full">
          {/* left side */}
          <Box className='flex flex-col w-[40%]'>
            <img src={filtered[0].img} alt="" className="w-[80%] h-[80%]"/>
            <Box className='flex gap-0.5'>
              <img src={filtered[0].img} alt="" className="w-[15%] h-[15%]"/>
              <img src={filtered[0].img} alt="" className="w-[15%] h-[15%]"/>
              <img src={filtered[0].img} alt="" className="w-[15%] h-[15%]"/>
              <img src={filtered[0].img} alt="" className="w-[15%] h-[15%]"/>
            </Box>
          </Box>
          {/* right side */}
          <Box className='flex flex-col w-[60%]'>
            <h4 className="text-2xl font-subtitle">{filtered[0].title}</h4>
            <h4 className="text-2xl font-subtitle">₱{filtered[0].origPrice}</h4>
            <h4 className="text-2xl font-subtitle">{filtered[0].brand}</h4>
            <input type="number" min='1' defaultValue={1} />
            <button class="normal">Add To Cart</button>
            <h4 className="text-2xl font-subtitle">Product Details</h4>
            <h4 className="text-2xl font-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
          </Box>
        </Box>
        <Newsletter />
        <Footer />
      </motion.div>
    </Box>
  );
};

export default ProductDetails;
