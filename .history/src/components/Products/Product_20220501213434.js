import React from "react";
import { useState } from "react";
import "../Products/Product.scss";
import Lightbox from "react-image-lightbox";
import snicker1 from "../../assets/images/snicker1.jpg";
import snicker2 from "../../assets/images/snicker2.jpg";
import snicker3 from "../../assets/images/snicker3.jpg";
import snicker4 from "../../assets/images/snicker4.jpg";
const Product = () => {
  const [imglarge, setImglarge] = useState(snicker1);
  return (
    <div className="products-container">
      <div className="content-left">
        <div className="img-up">
          <img src={snicker1} />
        </div>
        <div className="img-down">
          <div className="img-small">
            <img src={snicker2} onClick={}/>
          </div>
          <div className="img-small">
            <img src={snicker3}onCl<img src={snicker2} onClick={} />
          </div>
          <div className="img-small">
            <img src={snicker4}onCl<img src={snicker2} onClick={} />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">
          Giày Thể Thao Nam Biti’s Hunter X Z Collection InGreenZ
        </div>
        <div className="price">1.207.000 ₫</div>
        <div className="size">size: 40</div>
        <label>Số lượng</label>
        <div className="action">
          <input type="number" className="quantity" min={1} />
          <button className="buy">Chọn mua</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
