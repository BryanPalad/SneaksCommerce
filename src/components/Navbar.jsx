import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.PNG";
import { Box, Link } from "@mui/material";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { navbarLinks, shoeSizes } from "../core/utils/helper";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import {BsTrash} from 'react-icons/bs';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteExpense, updateExpense, updateSize, checkOut } from "../core/redux/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  // state.cart => cart comes from store file
  const {cartList: cartObj} = useSelector(state => state.cart);
  const sum = cartObj.reduce((accumulator, object) => {
    return accumulator + (object.origPrice * object.quantity);
  },0);  


  const [navMobile, setNavMobile] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);
  const [cartSize, setCartSize] = useState(400);
  const [newSize, setNewSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 768 ? setCartSize(350) : setCartSize(400);
    })
  },[cartObj]);


  const openNav = () => {
    setNavMobile(true);
  };
  const closeNav = () => {
    setNavMobile(false);
  };

  const openShoppingCart = () => {
    setShoppingCart(true);
  };

  const closeShoppingCart = () => {
    setShoppingCart(false);
  };

  const deleteItem = (item) => {
    dispatch(deleteExpense(item));
  } 

  const handleChange = (event, id) => {
    const newQuantity = event.target.value;
    const data = {
      newQuantity,
      id
    };
    dispatch(updateExpense(data));
  }

  const handleSize = (e, id) => {
    const newSize = e.target.value;
    setNewSize(prevState => prevState = newSize);
    const data = {
      size: newSize,
      id
    };
    dispatch(updateSize(data));
    
  }

  const placeOrder = () => {
    dispatch(checkOut());
    console.log(process.env.REACT_APP_PAYMENT_LINK);
  }
  return (
    <Box>
      <header
        className={`flex items-center bg-white duration-300 fixed top-0 left-0 w-full z-30 h-auto lg:h-[12vh]`}
      >
        <Box className="w-full px-12 py-4 lg:py-0 lg:px-24">
          <Box className="flex justify-between items-center">
            <Link href="#">
              <img src={logo} alt="" className="w-[150px]" />
            </Link>
            <Box className="flex items-center">
              <ul className="flex space-x-8 text-xl font-medium font-subtitle items-center">
                {navbarLinks.map((item, index) => {
                  const { title, to } = item;
                  return (
                    <>
                      {navMobile ? (
                        <>
                          <motion.aside
                            initial={{ width: 0 }}
                            animate={{ width: 250 }}
                            className="fixed top-0 right-0 z-50 h-full bg-white"
                          >
                            <Box className="flex flex-col items-center mt-24 h-full gap-8">
                              {navbarLinks.map((item, index) => {
                                const { title, to } = item;
                                return (
                                  <Box key={index}>
                                    <NavLink
                                      key={index}
                                      to={to}
                                      className={({ isActive }) =>
                                        isActive
                                          ? "text-xl text-red font-subtitle"
                                          : "text-xl hover:text-red duration-300 font-subtitle"
                                      }
                                    >
                                      {title}
                                    </NavLink>
                                  </Box>
                                );
                              })}
                            </Box>
                            <IoMdClose
                              className="absolute top-0 right-0 mt-8 mr-8 text-3xl cursor-pointer"
                              onClick={closeNav}
                            />
                          </motion.aside>
                        </>
                      ) : (
                        <Box key={index}>
                          <NavLink
                            to={to}
                            className={({ isActive }) =>
                              isActive
                                ? "text-red hidden font-subtitle md:block"
                                : `text-black hover:text-red duration-300 font-subtitle hidden md:block`
                            }
                          >
                            {title}
                          </NavLink>
                        </Box>
                      )}
                    </>
                  );
                })}
                <BiShoppingBag
                  id="bagIcon"
                  className="text-2xl bagIcon cursor-pointer"
                  onClick={openShoppingCart}
                />

                {/* shopping cart */}
                {shoppingCart && (
                  <>
                    <motion.aside
                      initial={{ width: 0 }}
                      animate={{ width: cartSize }}
                      exit={{ width: 0 }}
                      className="fixed top-0 right-0 z-50 h-full bg-white px-8 py-4 overflow-auto"
                    >
                      <Box className="flex flex-col text-center mt-8 gap-4">
                        <h4 className="text-2xl font-semibold font-main mb-8">
                          Your Cart
                        </h4>

                        {cartObj.map((item,index) => {
                          const {id, img, brand, origPrice, title, quantity, size} = item;
                          return(
                          <>
                          <Box className='flex-col' key={index}>
                          <h4 className='font-main mb-2 text-button'>{title}</h4>
                            <Box className="flex items-center gap-6 mb-4">
                            
                              <img src={img} alt="" className='h-[30%] w-[30%] rounded-xl' key={index}/>
                              <Box className="flex flex-col text-left space-y-2">
                               
                                <Box className='flex items-center space-x-4'>
                                <h4 className='font-subtitle'>₱{origPrice}</h4>
                                <input type="number" min='1' defaultValue={quantity} onChange={(e) => handleChange(e, id)} className='w-[40%] border border-black px-1 py-1'/>
                                </Box>
                                <Box className='flex titems-center space-x-6'>
                                <h4 className='font-subtitle'>Size</h4>
                                <select name="" id="" className='w-[80px] border border-black px-1 py-1' value={size} onChange={(e)=>handleSize(e, id)}>
                                  <option>{size}</option>
                                  {shoeSizes.map((item, index) => {
                                    return (
                                      <>
                                      <option key={index}>{item}</option>
                                      </>
                                    )
                                  })}
                                </select>
                                </Box>
                              </Box>
                              <Box className='flex justify-center items-center text-center'>
                                <BsTrash onClick={() => deleteItem(id)} className="text-2xl text-red cursor-pointer"/>
                                </Box>
                            </Box>
                            </Box>

                          </>)
                        })}
                        <hr/>
                        <Box className='flex justify-between items-center'>
                        <button className="text-lg border border-gray-200 px-2 py-1 rounded-lg bg-button text-white" onClick={placeOrder}>Place order</button>
                        <h4 className="text-xl font-semibold font-subtitle text-right">Total <span className="font-normal">₱{sum}</span></h4>
                        </Box>
                      </Box>
                      <IoMdClose 
                        className="absolute top-0 right-0 mt-6 mr-4 text-2xl cursor-pointer"
                        onClick={closeShoppingCart}
                      />
                    </motion.aside>
                  </>
                )}
              </ul>
              <button onClick={openNav}>
                <AiOutlineMenuFold className="text-2xl block ml-4 md:hidden duration-300" />
              </button>
            </Box>
          </Box>
        </Box>
      </header>
    </Box>
  );
};

export default Navbar;
