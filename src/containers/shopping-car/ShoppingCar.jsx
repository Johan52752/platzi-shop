import React, { useContext } from "react";
import "./ShoppingCar.css";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import arrowleft from "../../assets/icons/arrow-left-solid.svg";
import AppContext from "../../context/AppContext";

const ShoppingCar = ({ handle }) => {
  const { state } = useContext(AppContext);
  return (
    <aside className="shoping-car">
      <div className="shop-desktop">
        <img onClick={handle} src={arrowleft} alt="arrow-left" />
        <h1>Shoping cart</h1>
      </div>
      <div className="order-grid">
        {state.cart.map((item) => (
          <ShoppingCart
            key={item.idItem}
            product={item}
          />
        ))}
      </div>
      <div className="orders-options">
        <p className="orders-description">
          <span>Total</span>
        </p>
        <p className="orders-price">
          $
          {
            state.cart.length?state.cart.reduce(( a , b ) => (a + b.price),0):"0"
            }
        </p>
      </div>
      <button className="button-card">Checkout</button>
    </aside>
  );
};

export default ShoppingCar;
