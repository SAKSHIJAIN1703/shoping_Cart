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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Banner(props) {
  const [updatedValue, setUpdateValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [increment, setIncrement] = useState(0);

  const orderPlaced = () => {
    swal("order placed successfully");
    setCART([]);
  };
  const handleIncrement = (price) => {
    setIncrement(increment + 1);
    const total = price * (increment + 1);
    setTotalPrice(total);
  };
  const [open, setOpen] = useState(false);
  const backArrow = () => {
    setOpen(false);
  };
  const ShowCart = () => {
    setOpen(true);
    console.log(open, "open");
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
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCART(addCart);
  }, [addCart]);
  const [save, setSave] = useState(true);
  const addToCart = (data, index) => {
    if (CART.includes(data)) {
      setSave(false);
      swal("this item is already in cart");
    } else {
      console.log(false);
      setAddCart([...CART, data]);
      setCartCount(cartCount + 1);
      toast("item added in cart !");
    }
    console.log("cart --->", addCart);
  };
  const removeItem = (cartItem) => {
    console.log("item --->", cartItem);
    setCartCount(cartCount - 1);
    const filteredData = addCart.filter((item) => {
      return item.id !== cartItem.id;
    });

    console.log("filteredData --->", filteredData);

    setAddCart(filteredData);
  };

  return (
    <div className="banner col-375 mx-auto">
      <>
        <section className="banner d-flex align-items-start">
          <div className="container">
            <div className="row complex justify-content-center">
              {open === true ? (
                <div className="bg-white  ">
                  <div className="cartBanner cart-top-banner bg-black w-100 border-radius-b-8 px-4 d-flex align-items-center justify-content-between">
                    <div
                      className="d-flex justify-content-center align-items-center "
                      onClick={() => {
                        backArrow();
                      }}
                    >
                      <ArrowBackIosIcon style={{ color: "#fff" }} />
                      <h4 className="text-white font-weight-700 mb-0 font-size-20">
                        Cart
                      </h4>
                    </div>
                    <div className="relative">
                      <ShoppingCartIcon style={{ color: "#fff" }} />
                      <div className="cart-box absolute d-flex justify-content-center align-items-center ">
                        <p className="text-white  mb-0 ">{cartCount}</p>
                      </div>
                    </div>
                  </div>
                  <div className="cart-bg">
                    {CART?.map((cartItem, cartIndex) => {
                      return (
                        <>
                          <div
                            className={`cart py-2 px-3 mx-2 my-3 border-radius-8 box-shadow cart-${cartItem.id}`}
                          >
                            <div className="d-flex justify-content-start gap-3">
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
                            {CART === [] ? (
                              ""
                            ) : (
                              <div className="remove-item  px-4">
                                <button
                                  className="add-btn border-radius-8  px-3"
                                  onClick={() => removeItem(cartItem)}
                                >
                                  remove
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div
                    className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center"
                    onClick={() => {
                      orderPlaced();
                    }}
                  >
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
              ) : (
                <div className=" ">
                  <div>
                    <div className="row  relative">
                      <div className="d-flex align-items-center justify-content-between py-4 absolute banner-header">
                        <h1 className="font-size-20">
                          {" "}
                          <span className="text-yellow">WelCome</span> ,{" "}
                          {props.value}{" "}
                        </h1>
                        <div
                          className="relative"
                          onClick={() => {
                            ShowCart();
                          }}
                        >
                          <ShoppingCartIcon style={{ color: "#000" }} />
                          <div className="cart-box absolute d-flex justify-content-center align-items-center ">
                            <p className="text-white  mb-0 ">{cartCount}</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-bg">
                        {data.productData.map((item, index) => {
                          return (
                            <>
                              <div className="col-12 pb-3">
                                <div className="d-flex justify-content-between align-items-end bg-white border-radius-8 p-2 box-shadow">
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
                                      add
                                    </button>
                                    <ToastContainer />
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Banner;
