import React, { useState, useContext, useEffect } from "react";
import "./ProductCard.css";
import addtocart from "../../assets/icons/bt_add_to_cart.svg";
import addedtocart from "../../assets/icons/bt_added_to_cart.svg";
import AppContext from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const [isAdd, setIsAdd] = useState(false);
  useEffect(()=>{
    const arr=state.cart?.filter((item)=>item.id===product.id);
    arr.length?setIsAdd(true):setIsAdd(false);
  },[state.cart])
  return (
    <div className="product-card">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          onClick={() => {
            addToCart(product);
          }}
        >
          {isAdd? (
            <img src={addedtocart} alt="addedtocart" />
          ) : (
            <img src={addtocart} alt="addtocart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;
