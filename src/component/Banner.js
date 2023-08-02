import "../App.js";
import "../App.css";
import vegImg from "../img/veg-icon.png";
import React, { useState } from "react";
import Product from "./Product.js";
import data from "./Data.js";
import swal from "sweetalert";
import { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ToastContainer, toast, Zoom } from "react-toastify";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "react-toastify/dist/ReactToastify.css";
function Banner(props) {
  const [empty, setEmpty] = useState();
  const [orderBox, setOrderBox] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [orderBtn, setOrderBtn] = useState(false);
  const orderPlaced = () => {
    swal("order placed successfully");
    setCART([]);
    console.log(CART, "--CART");
    setEmpty(`empty-cart`);
    setOrderBtn(!orderBtn);
    setShowOrder(!showOrder);
    setCartCount(0);
  };
  const [open, setOpen] = useState(false);
  const backArrow = () => {
    setOpen(false);
    // setOrderBox([]);
    setCART([]);
  };
  // const bacToCartBtn=()
  const backToCart = () => {
    setOrderBtn(!orderBtn);
    setShowOrder(!showOrder);
    setCART([]);
    setCartCount(cartCount);
  };
  const ShowCart = () => {
    setOpen(true);
    console.log(open, "open");
  };
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
      console.log(save);
      swal("this item is already in cart");
    } else {
      console.log(false);
      setAddCart([...CART, data]);
      setCartCount(cartCount + 1);
      toast.success("item added in cart !");
    }
  };
  const viewOrder = () => {
    setOrderBox(CART);
    setCART(addCart);
    setOrderBtn(!orderBtn);
    // setCART([]);
  };
  const removeItem = (cartItem) => {
    toast.success("item remove in cart !");
    setCartCount(cartCount - 1);

    const filteredData = addCart.filter((item) => {
      return item.id !== cartItem.id;
    });
    setAddCart(filteredData);
  };

  return (
    <div className="banner col-375 mx-auto">
      <>
        <section className="banner d-flex align-items-start">
          <div className="container">
            <div className="row complex justify-content-center">
              {open === true ? (
                <div className="bg-white px-0 ">
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
                  <div className="cart-bg ">
                    <div
                      className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center gap-2 cursor-pointer"
                      onClick={() => {
                        viewOrder();
                      }}
                    >
                      <LocalMallIcon />
                      <h4 className="text-black font-weight-700 mb-0 font-size-20">
                        view order
                      </h4>
                    </div>

                    <>
                      {CART.length > 0 ? (
                        <>
                          {CART?.map((cartItem, cartIndex) => {
                            return (
                              <>
                                <div
                                  key={cartIndex}
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
                                      <p className="mb-0">
                                        {cartItem.description}
                                      </p>
                                      <div className="d-flex justify-content-start">
                                        <p className="mb-0 font-weight-500">
                                          {/* price : {totalPrice} */}
                                          price:
                                          {cartItem.price * cartItem.quantity}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="remove-item  px-4 d-flex justify-content-between align-items-end pt-3">
                                    <div>
                                      <button
                                        className="add-btn border-radius-8  px-3"
                                        onClick={() => removeItem(cartItem)}
                                      >
                                        remove
                                      </button>
                                      <ToastContainer />
                                    </div>
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
                                      <p className="mb-0">
                                        {cartItem.quantity}
                                      </p>
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
                              </>
                            );
                          })}
                          <div
                            className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center  cursor-pointer"
                            onClick={() => {
                              orderPlaced();
                            }}
                          >
                            <h4 className="text-black font-weight-700 mb-0 font-size-20">
                              PAY ₹
                              {CART.map((item) => {
                                return item.price * item.quantity;
                              }).reduce(
                                (currValue, updatedValue) =>
                                  currValue + updatedValue,
                                0
                              )}
                            </h4>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="empty-cart d-flex justify-content-center flex-column gap-4 h-100 align-items-center">
                            <h4 className=" text-capitalize mb-0 text-center">
                              Your Cart is{" "}
                              <span className="text-yellow"> empty !</span>
                            </h4>
                            <p className="text-gray mb-0  text-center">
                              must add items on the cart before you proceed to
                              checkout
                            </p>
                            <button
                              className="bg-yellow empty-cart-btn"
                              onClick={() => {
                                backArrow();
                              }}
                            >
                              <h5 className="text-capitalize text-white mb-0">
                                return to shop
                              </h5>
                            </button>
                          </div>
                        </>
                      )}
                    </>
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
                              <div className="col-12 pb-3" key={index}>
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
                                    <ToastContainer transition={Zoom} />
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
