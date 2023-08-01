// import img from '../img/DSC_1614.JPG';
import "../App.js";
import "../App.css";
import React, { Component, useState } from "react";

function Product(props) {
  return (
    <>
      <div className="d-flex justify-content-start  align-items-start gap-2">
        <div className="product-img">
          <img src={props.imgValue} alt="" className="w-100" />
        </div>
        <div className=" d-grid gap-2 ">
          <h5 className=" mb-0">{props.title}</h5>
          <p className="mb-0 ">{props.description}</p>
          <p className="mb-0 font-weight-500">price: {props.price}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
