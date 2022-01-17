import React, { useContext } from "react";
import "./ShoppingCart.css";
import AppContext from "../../context/AppContext";
import close from "../../assets/icons/icon_close.png"

const ShoppingCart = ({product}) => {
  const {removeFromCart} = useContext(AppContext);
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
          className="shopping-img"
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img onClick={()=>{removeFromCart(product)}} src={close} alt="close" className="shopping-close" /> 
    </div>
  );
};

export default ShoppingCart;
