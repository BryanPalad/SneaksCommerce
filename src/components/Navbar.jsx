import React from "react";
import logo from "../assets/img/logo.PNG";
import { Box } from "@mui/material";
import {BiShoppingBag} from 'react-icons/bi';
import { navbarLinks } from "../core/redux/utils/helper";

const Navbar = () => {
  return (
    <section className="bg-primary py-2 fixed top-0 left-0 w-full z-50">
    <Box className="w-full px-24">
        <Box className="flex justify-between items-center">
        <img src={logo} alt="" className='w-[150px]'/>
            <Box>
                <ul className='flex space-x-8 text-xl font-medium font-subtitle items-center'>
                    {navbarLinks.map((item, index) => {
                        const {title, to} = item;
                        return (
                            <li key={index}>
                                <a href={to}>{title}</a>
                            </li>
                        )
                    })}
                    <BiShoppingBag id="bagIcon" className="text-2xl bagIcon cursor-pointer"/>
                    <i class="bx bxs-x-square" id="close"></i>
                </ul>
            </Box>
        </Box>
    </Box>
    </section>
  );
};

export default Navbar;
