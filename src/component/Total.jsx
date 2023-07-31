import React from "react";

function Total({ CartPrice }) {
  return (
    <>
      <div className="cartBanner payment bg-yellow w-100  justify-content-center d-flex align-items-center">
        <h4 className="text-black font-weight-700 mb-0 font-size-20">
          PAY ₹{CartPrice}
        </h4>
      </div>
    </>
  );
}

export default Total;
