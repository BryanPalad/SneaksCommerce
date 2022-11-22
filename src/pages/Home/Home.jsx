import React from "react";
import { Navbar, Newsletter, Products, Footer} from "../../components";
import { Box } from "@mui/material";
import {
  featuredProductsHome,
  featuresData,
  newArrivalProducts,
} from "../../core/redux/utils/helper";

const Home = () => {
  return (
    <Box>
      <Navbar />
      {/* hero banner section */}
      <section className="bg-heroBanner mt-12 h-[95vh]">
        <Box className="flex flex-col justify-center align-center px-24 h-full w-full">
          <h3 className="text-black text-3xl font-subtitle">Trade-in-offer</h3>
          <h3 className="text-black text-6xl font-semibold font-subtitle">
            Super Value Deals
          </h3>
          <h3 className="text-red text-6xl font-semibold font-subtitle">
            On All Products
          </h3>
          <h3 className="text-black text-lg font-subtitle italic">
            Save more with coupons & up to 70% Off!
          </h3>
          <button className="w-[140px] text-center font-medium font-subtitle text-lg bg-shopNow py-4 bg-no-repeat bg-center">
            Shop Now
          </button>
        </Box>
      </section>
      {/* features section */}
      <section className="w-full h-auto">
        <Box className="flex justify-around items-center text-center py-12 px-12 flex-wrap">
          {featuresData.map((item, index) => {
            const { title, img, color } = item;
            return (
              <Box className="flex flex-col w-[180px] text-center py-[25px] px-[15px] gap-4 border border-slate-200 shadow-slate-400 rounded-lg mb-4">
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
    </Box>
  );
};

export default Home;
