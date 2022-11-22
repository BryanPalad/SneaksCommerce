import React, {useEffect, useState} from "react";
import logo from "../assets/img/logo.PNG";
import { Box, Link} from "@mui/material";
import {BiShoppingBag} from 'react-icons/bi';
import { navbarLinks } from "../core/redux/utils/helper";

const Navbar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return (
    // <header className={`${bg ? 'bg-secondaryWhite dark:bg-secondary h-20' : 'bg-primaryWhite dark:bg-primary h-24'} flex items-center fixed top-0 w-full text-black dark:text-white z-10 transition-all duration-300`}></header>
    <header className={`${bg ? 'bg-primary h-24' : 'bg-transparent h-28'} duration-300 py-2 fixed top-0 left-0 w-full z-50`}>
    <Box className="w-full px-12 lg:px-24">
        <Box className="flex justify-between items-center">
        <img src={logo} alt="" className='w-[150px]'/>
            <Box>
                <ul className='flex space-x-8 text-xl font-medium font-subtitle items-center'>
                    {navbarLinks.map((item, index) => {
                        const {title, to} = item;
                        return (
                            <Link underline='none' href={to} color='inherit' key={index} activeClass='active' className='active:text-red hover:text-red duration-300'>
                                {title}
                            </Link>
                        )
                    })}
                    <BiShoppingBag id="bagIcon" className="text-2xl bagIcon cursor-pointer"/>
                    <i class="bx bxs-x-square" id="close"></i>
                </ul>
            </Box>
        </Box>
    </Box>
    </header>
  );
};

export default Navbar;
