import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.PNG";
import { Box, Link } from "@mui/material";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { navbarLinks, shoeSizes } from "../core/utils/helper";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { BsTrash } from "react-icons/bs";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
  deleteExpense,
  updateExpense,
  updateSize,
  checkOut,
} from "../core/redux/cartSlice";

// modal
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// icons
import gcash from "../assets/img/payment/gcash.webp";
import grab from "../assets/img/payment/grab.png";
import paymaya from "../assets/img/payment/paymaya.png";
import cod from "../assets/img/payment/cod.png";
import bpi from "../assets/img/payment/bpi.png";
import ubp from "../assets/img/payment/ubp.png";

import Swal from "sweetalert2";
import AppTab from "./Tabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // radio
  const [value, setValue] = useState("grab");
  const handleChangePayment = (event) => {
    setValue(event.target.value);
  };

  const handlePay = () => {
    if (value === "grab") {
      window.open(
        "https://partner-api.grab.com/grabid/v1/oauth2/authorize?acr_values=consent_ctx%3AcountryCode%3DPH,currency%3DPHP&client_id=33437db2de45457ca3f5888bab187121&code_challenge=c-jMOMKG_e020i2oscfb_W7CYLQqfp2vBw4cgZioApo&code_challenge_method=S256&nonce=90ee4561-6aaa-4bea-bca3-078b6fb32aa0&redirect_uri=https://grabpay-connector-live.xendit.co/redirect&request=eyJhbGciOiAibm9uZSJ9.eyJjbGFpbXMiOnsidHJhbnNhY3Rpb24iOnsidHhJRCI6IjAyOTAyMjAzNDc3NTRkZGI4ZmE4Y2NjNzQyZjBmNmNhIn19fQ.&response_type=code&scope=payment.one_time_charge&state=8c63afa0-af51-4a89-89e8-d00e5e280c1c"
      );
    } else if (value === "paymaya") {
      window.open(
        "https://payments.maya.ph/paymaya/payment?id=82c37b63-b9b5-47df-9b2e-b545d868d282"
      );
    } else if (value === "gcash") {
      alert("gcash payment still in development");
    } else if (value === "bpi"){
      window.open(
        "https://link-web.xendit.co/oauth/lat-7400a6b1-8818-4e94-a11a-4b07ecd51706/confirm"
      );
    } else if (value === "ubp") {
      window.open(
        "https://link-web.xendit.co/oauth/lat-70d4cf77-be09-4e86-bcef-2129bea6c7cc/confirm"
      );
    } else {
      handleClose();
      Swal.fire({
        icon: "success",
        title: "Thank You For Shopping!",
        text: "We will send you an sms/email for more details of your order.",
      });
      dispatch(checkOut());
    }
  };

  const dispatch = useDispatch();
  // state.cart => cart comes from store file
  const { cartList: cartObj } = useSelector((state) => state.cart);
  const sum = cartObj.reduce((accumulator, object) => {
    return accumulator + object.origPrice * object.quantity;
  }, 0);

  const [navMobile, setNavMobile] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);
  const [cartSize, setCartSize] = useState(400);
  const [newSize, setNewSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 768 ? setCartSize(350) : setCartSize(400);
    });
  }, [cartObj]);

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
  };

  const handleChange = (event, id) => {
    const newQuantity = event.target.value;
    const data = {
      newQuantity,
      id,
    };
    dispatch(updateExpense(data));
  };

  const handleSize = (e, id) => {
    const newSize = e.target.value;
    setNewSize((prevState) => (prevState = newSize));
    const data = {
      size: newSize,
      id,
    };
    dispatch(updateSize(data));
  };

  const placeOrder = () => {
    if (sum == 0) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Please select an item first",
      });
    } else {
      handleOpen();
    }
    // dispatch(checkOut());
  };
  return (
    <Box>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-xl font-subtitle font-semibold text-center mb-6">
            Payment Method
          </h2>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChangePayment}
            >
              <h2 className="text-normal font-subtitle mb-2">
                How do you want to pay?
              </h2>

              <AppTab
                tabLabel1={"COD/Mobile Wallet"}
                tabLabel2={"Online Banking"}
                tabChildren1={
                  <>
                    <Box className="flex w-full items-center justify-around gap-2 mb-2 border border-black-500 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="grab"
                        control={<Radio />}
                        label="Grab"
                      />
                      <img src={grab} alt="grab" className="w-1/4 py-2" />
                    </Box>

                    <Box className="flex w-full items-center justify-around gap-2 mb-2 py-4 border border-black-300 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="paymaya"
                        control={<Radio />}
                        label="Maya"
                      />
                      <img src={paymaya} alt="paymaya" className="w-1/4 py-2" />
                    </Box>

                    <Box className="flex w-full items-center justify-around gap-2 mb-2 border border-black-300 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="gcash"
                        control={<Radio />}
                        label="Gcash"
                      />
                      <img src={gcash} alt="gcash" className="w-1/4 py-2" />
                    </Box>

                    <Box className="flex w-full items-center justify-around gap-2 border border-black-300 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="cod"
                        control={<Radio />}
                        label="Cash on Delivery"
                      />
                      <img src={cod} alt="cod" className="w-1/4" />
                    </Box>
                  </>
                }
                tabChildren2={
                  <>
                    <Box className="flex w-full items-center justify-around gap-2 mb-2 border border-black-500 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="bpi"
                        control={<Radio />}
                        label="BPI"
                      />
                      <img src={bpi} alt="bpi" className="w-1/4 py-4" />
                    </Box>

                    <Box className="flex w-full items-center justify-around gap-2 mb-2 py-4 border border-black-300 rounded-lg hover:border-indigo-400 duration-300">
                      <FormControlLabel
                        value="ubp"
                        control={<Radio />}
                        label="UnionBank"
                      />
                      <img src={ubp} alt="union bank" className="w-1/3 py-2" />
                    </Box>
                  </>
                }
              />
            </RadioGroup>
          </FormControl>
          <h4 className="text-lg font-semibold font-subtitle text-right py-2">
            Total: <span className="font-normal">₱{sum}.00</span>
          </h4>
          <Box className="mt-4 flex items-center gap-2">
            <button
              className="text-lg w-1/2 border border-gray-200 px-2 py-1 rounded-lg bg-button text-white"
              onClick={handlePay}
            >
              Pay
            </button>
            <button
              className="text-lg w-1/2 border border-gray-200 px-2 py-1 rounded-lg bg-red text-white"
              onClick={handleClose}
            >
              Cancel
            </button>
          </Box>
        </Box>
      </Modal>

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
                        <h4 className="text-2xl font-semibold font-main mb-2">
                          Your Cart
                        </h4>
                        {sum == 0 ? (
                          <>
                            <h4>No Items Selected</h4>
                          </>
                        ) : (
                          <Box className='text-button'> {Object.keys(cartObj).length} item/s selected</Box>
                        )}
                        {cartObj.map((item, index) => {
                          const {
                            id,
                            img,
                            brand,
                            origPrice,
                            title,
                            quantity,
                            size,
                          } = item;
                          return (
                            <>
                              <Box className="flex-col" key={index}>
                                <h4 className="font-main mb-2 text-button text-left">
                                  {title}
                                </h4>
                                <Box className="flex items-center gap-6 mb-4">
                                  <img
                                    src={img}
                                    alt=""
                                    className="h-[30%] w-[30%] rounded-xl"
                                    key={index}
                                  />
                                  <Box className="flex flex-col text-left space-y-2">
                                    <Box className="flex items-center space-x-4">
                                      <h4 className="font-subtitle">
                                        ₱{origPrice}
                                      </h4>
                                      <input
                                        type="number"
                                        min="1"
                                        defaultValue={quantity}
                                        onChange={(e) => handleChange(e, id)}
                                        className="w-[40%] border border-black px-1 py-1"
                                      />
                                    </Box>
                                    <Box className="flex titems-center space-x-6">
                                      <h4 className="font-subtitle">Size</h4>
                                      <select
                                        name=""
                                        id=""
                                        className="w-[80px] border border-black px-1 py-1"
                                        value={size}
                                        onChange={(e) => handleSize(e, id)}
                                      >
                                        <option>{size}</option>
                                        {shoeSizes.map((item, index) => {
                                          return (
                                            <>
                                              <option key={index}>
                                                {item}
                                              </option>
                                            </>
                                          );
                                        })}
                                      </select>
                                    </Box>
                                  </Box>
                                  <Box className="flex justify-center items-center text-center">
                                    <BsTrash
                                      onClick={() => deleteItem(id)}
                                      className="text-2xl text-red cursor-pointer"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                              <hr />
                            </>
                          );
                        })}

                        <Box className="flex justify-between items-center">
                          <button
                            className="text-lg border border-gray-200 px-2 py-1 rounded-lg bg-button text-white"
                            onClick={placeOrder}
                          >
                            Place order
                          </button>
                          <h4 className="text-xl font-semibold font-subtitle text-right">
                            Total: <span className="font-normal">₱{sum}</span>
                          </h4>
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
