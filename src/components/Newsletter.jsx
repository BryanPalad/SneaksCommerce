import React from "react";
import { Box } from "@mui/material";

const Newsletter = () => {
  return (
    <section className="flex justify-center items-center mt-12 bg-newsletterBanner bg-no-repeat bg-newsletterBg h-[30vh] mb-12 lg:h-[20vh]">
      <Box className="flex flex-col justify-between items-center w-full px-6 lg:px-24 lg:flex-row gap-4">
        <Box className="text-center lg:text-left">
          <h3 className="text-white font-subtitle font-medium text-2xl">
            Sign Up for Newsletters
          </h3>
          <h3 className="text-white font-main font-normal text-lg">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-yellow">special offers.</span>
          </h3>
        </Box>
        <Box className="flex">
          <input type="text" placeholder="Your Email Address" className="w-[200px] h-[55px] px-4 rounded-l-lg outline-none sm:w-[400px]" />
          <button className='rounded-r-lg w-[90px] h-[55px] bg-button text-white text-md font-medium'>Sign Up</button>
        </Box>
      </Box>
    </section>
  );
};

export default Newsletter;
