import React from "react";
import { Navbar, Newsletter, Products, Footer, Features} from "../../components";
import { Box } from "@mui/material";
import {
  featuredProductsHome,
  newArrivalProducts,
} from "../../core/utils/helper";
import {motion} from 'framer-motion';

const Home = () => {
  
  return (
    <Box>
      <Navbar />
      <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {/* main hero banner section */}
      <section className="bg-heroBanner bg-cover bg-top bg-no-repeat h-[100vh]">
        <Box className="flex flex-col justify-center align-center px-12 h-full w-full lg:px-24 ">
          <h3 className="text-black text-2xl g:text-3xl font-subtitle">Trade-in-offer</h3>
          <h3 className="text-black text-5xl lg:text-6xl font-semibold font-subtitle">
            Super Value Deals
          </h3>
          <h3 className="text-red text-5xl lg:text-6xl font-semibold font-subtitle">
            On All Products
          </h3>
          <h3 className="text-black text-md lg:text-lg font-subtitle italic">
            Save more with coupons & up to 70% Off!
          </h3>
          <button className="w-[140px] text-center font-medium font-subtitle text-lg bg-shopNow py-4 bg-no-repeat bg-center">
            Shop Now
          </button>
        </Box>
      </section>
      {/* features section */}
      <Features/>
      {/* featured products */}
      <Products
        productsArray={featuredProductsHome}
        title={"Featured Products"}
        description={"Summer Collection New Modern Design"}
      />
      {/* banner */}
      <section className="flex justify-center items-center bg-bannerRepair mt-12 mb-12 h-[40vh] bg-cover bg-center bg-no-repeat">
        <Box className="container mx-auto flex flex-col items-center text-center justify-center w-full gap-2">
          <h4 className="text-xl lg:text-2xl font-medium font-subtitle text-white">
            Repair Services
          </h4>
          <h4 className="text-4xl lg:text-5xl font-semibold font-main text-white">
            Up to <span className="text-red">70% Off</span>- All Branded Shoes
          </h4>
          <button className="w-[30%] md:w-[15%] border border-white mt-6 py-2 text-white font-medium hover:bg-black hover:border-black duration-300">
            Explore More
          </button>
        </Box>
      </section>
      {/* new arrivals */}
      <Products
        productsArray={newArrivalProducts}
        title={"New Arrivals"}
        description={"Summer Collection New Modern Design"}
      />
      <Newsletter />
      <Footer/>
      </motion.div>
    </Box>
    );
};

export default Home;
