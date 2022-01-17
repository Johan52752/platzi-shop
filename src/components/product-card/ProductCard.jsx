import React, { useContext } from "react";
import "./ProductCard.css";
import addtocart from "../../assets/icons/bt_add_to_cart.svg"
import AppContext from "../../context/AppContext";

const ProductCard = ({product}) => {
  const { addToCart } = useContext(AppContext);
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt=""
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={()=>addToCart(product)}>
          <img src={addtocart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
