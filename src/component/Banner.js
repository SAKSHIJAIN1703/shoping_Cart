import "../App.js";
import "../App.css";
import img from "../img/DSC_1614.JPG";
import vegImg from "../img/veg-icon.png";
import React, { Component, useState } from "react";
import Cart from "./Cart.js";
import Product from "./Product.js";
import data from "./Data.js";
import swal from "sweetalert";
import Total from "./Total.jsx";
import { useEffect } from "react";

function Banner(props) {
  const [updatedValue, setUpdateValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [increment, setIncrement] = useState(0);
  const handleIncrement = (price) => {
    setIncrement(increment + 1);
    const total = price * (increment + 1);
    setTotalPrice(total);
  };
  const handleDecrement = (price) => {
    if (increment > 1) {
      setIncrement(increment - 1);
      const total = price * (increment - 1);
      setTotalPrice(total);
    } else {
      alert("sorry");
    }
  };

  const [addItem, setAddItem] = useState();
  const [addCart, setAddCart] = useState([]);
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(addCart);
  }, [addCart]);
  const addToCart = (data, index) => {
    if (CART.includes(data)) {
      swal("this item is already in cart");
    } else {
      console.log(false);
      setAddCart([...CART, data]);
    }
    console.log("cart --->", addCart);
  };
  const removeItem = (cartItem) => {
    console.log("item --->", cartItem);

    const filteredData = addCart.filter((item) => {
      return item.id !== cartItem.id;
    });

    console.log("filteredData --->", filteredData);

    setAddCart(filteredData);
  };

  return (
    <div className="banner">
      <>
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between py-5">
                  <h1>
                    {" "}
                    <span className="text-yellow">WelCome</span> , {props.value}{" "}
                  </h1>
                  <h1>{addItem}</h1>
                </div>
              </div>
            </div>
            <div className="row complex">
              <div className="col-xl-8 product-bg">
                <div>
                  <div className="row">
                    {data.productData.map((item, index) => {
                      return (
                        <>
                          <div className="col-12 pb-3">
                            <div className="d-flex justify-content-between align-items-center bg-white border-radius-8 p-2">
                              <Product
                                imgValue={item.img}
                                price={item.price}
                                title={item.title}
                                description={item.description}
                                id={item.id}
                              />
                              <div className="">
                                <button
                                  onClick={() => addToCart(item, index)}
                                  className="add-btn border-radius-8 w-100 px-3"
                                >
                                  add item
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="bg-white position-relative  ">
                  <div className="cartBanner bg-black w-100 border-radius-8 px-4 d-flex align-items-center">
                    <h4 className="text-white font-weight-700 mb-0 font-size-20">
                      Cart
                    </h4>
                  </div>
                  <div className="cart-bg">
                    {CART?.map((cartItem, cartIndex) => {
                      return (
                        <>
                          <div
                            className={`cart py-2 px-3 m-2 border-radius-8 border cart-${cartItem.id}`}
                          >
                            <div className="d-flex justify-content-around gap-2">
                              <div>
                                <img src={vegImg} alt="" className="" />
                              </div>
                              <div className="">
                                <h5 className="text-black mb-0">
                                  {cartItem.title}
                                </h5>
                                <p className="mb-0">{cartItem.description}</p>
                                <div className="d-flex justify-content-between">
                                  <p className="mb-0 font-weight-500">
                                    {/* price : {totalPrice} */}
                                    price:{cartItem.price * cartItem.quantity}
                                  </p>
                                  <div className="cart-btn d-flex gap-2">
                                    <div className="cart-minus">
                                      <button
                                        onClick={() => {
                                          const _CART = CART.map(
                                            (item, index) => {
                                              return cartIndex === index
                                                ? {
                                                    ...item,
                                                    quantity:
                                                      item.quantity > 1
                                                        ? item.quantity - 1
                                                        : 1,
                                                  }
                                                : item;
                                            }
                                          );
                                          setCART(_CART);
                                        }}
                                      >
                                        -
                                      </button>
                                    </div>
                                    <p className="mb-0">{cartItem.quantity}</p>
                                    <div className="cart-plus">
                                      <button
                                        onClick={() => {
                                          const _CART = CART.map(
                                            (item, index) => {
                                              return cartIndex === index
                                                ? {
                                                    ...item,
                                                    quantity:
                                                      cartItem.quantity + 1,
                                                  }
                                                : item;
                                            }
                                          );
                                          setCART(_CART);
                                        }}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="remove-item  px-4">
                              <button
                                className="add-btn border-radius-8  px-3"
                                onClick={() => removeItem(cartItem)}
                              >
                                remove
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center">
                    <h4 className="text-black font-weight-700 mb-0 font-size-20">
                      PAY ₹
                      {CART.map((item) => {
                        return item.price * item.quantity;
                      }).reduce(
                        (currValue, updatedValue) => currValue + updatedValue,
                        0
                      )}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Banner;
