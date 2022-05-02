import React from "react";
import "../Products/Product.scss";
const Product = () => {
  return (
    <div className="products-container">
      <div className="content-left">content-left</div>
      <div className="content-right">
        <div className="title">
          Giày Thể Thao Nam Biti’s Hunter X Z Collection InGreenZ
        </div>
        <div className="price">1.207.000 ₫</div>
        <div className="size">
          size: 40
        </div>
        <div className="action">
            <input type="number" />
            <button className=""></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
