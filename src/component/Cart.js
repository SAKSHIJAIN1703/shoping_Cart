import "../App.js";
import "../App.css";
import vegImg from "../img/veg-icon.png";

import React, { Component, useState } from "react";
import Total from "./Total.jsx";
// import Product  from './Product.js';

function Cart(props) {
  // const [totalPriceValue, setTotalPriceValue] = useState([]);

  // const removeItem = (cartId) => {
  //   console.log("item --->", cartId);
  // };
  // const [addCart, setAddCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState([props.CartPrice]);
  const [increment, setIncrement] = useState(1);
  const handleIncrement = (price) => {
    setIncrement(increment + 1);
    const total = price * (increment + 1);
    setTotalPrice(total);
    console.log([...totalPrice, total]);
  };
  console.log([...totalPrice], ".totalprice");
  const handleDecrement = (price) => {
    if (increment > 1) {
      setIncrement(increment - 1);
      const total = price * (increment - 1);
      setTotalPrice(total);
    } else {
      alert("sorry");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around gap-2">
        <div>
          <img src={vegImg} alt="" className="" />
        </div>
        <div className="">
          <h5 className="text-black mb-0">{props.cartTitle}</h5>
          <p className="mb-0">{props.cartDescription}</p>
          <div className="d-flex justify-content-between">
            <p className="mb-0 font-weight-500"> price : {totalPrice}</p>
            <div className="cart-btn d-flex gap-2">
              <div className="cart-minus">
                <button onClick={() => handleDecrement(props.CartPrice)}>
                  -
                </button>
              </div>
              <p className="mb-0">{increment}</p>
              <div className="cart-plus">
                <button onClick={() => handleIncrement(props.CartPrice)}>
                  +
                </button>
              </div>
            </div>
          </div>

          {/* <div className="remove-item  px-4">
            <button
              className="add-btn border-radius-8  px-3"
              onClick={() => removeItem(props.cartId)}
            >
              remove
            </button>
          </div> */}
        </div>
      </div>
      {/* <Total CartPrice={totalPrice} /> */}
      <div className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center">
        <h4 className="text-black font-weight-700 mb-0 font-size-20">
          PAY ₹{totalPrice}
        </h4>
      </div>
    </>
  );
}

export default Cart;
