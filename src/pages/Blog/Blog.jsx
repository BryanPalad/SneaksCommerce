import React from "react";
import { Newsletter, Footer, Navbar, Banner } from "../../components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { blogData } from "../../core/utils/helper";

const Blog = () => {
  return (
      <Box>
        <Navbar />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Banner bannerTitle="#readmore" bannerSubtitle="Read all case studies about our products!" bannerImage="bg-blogBanner"/>
        {/* blog section */}
        <Box className="px-12 lg:px-24 mt-32 w-full">
          {blogData.map((item, index) => {
            const { title, description, image } = item;
            return (
              <Box className="flex flex-col items-center text-start gap-4 mb-32 lg:gap-12 lg:flex-row">
                {/* image side */}
                <Box className="relative w-full lg:w-[50%]">
                  <img src={image} alt='blog pic' className='h-[300px] w-[100%] object-cover z-50'/>
                  <h4 className='absolute top-0 left-0 text-7xl mt-[-55px] z-[-1] font-semibold font-subtitle text-lightgray'>13/01</h4>
                </Box>
                {/* details side */}
                <Box className="flex flex-col gap-4 w-full lg:w-[50%]">
                  <h4 className='text-2xl font-semibold font-main'>{title}</h4>
                  <h4 className=''>{description}</h4>
                  <h4 className='font-bold '>Continue reading</h4>
                  </Box>
              </Box>
            );
          })}
        </Box>
        <Newsletter />
        <Footer />
        </motion.div>
      </Box>
  );
};

export default Blog;
