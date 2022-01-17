import React, { useContext, useState } from "react";
import './Header.css'
import menu from "../../assets/icons/icon_menu.svg";
import logo from "../../assets/logos/logo_yard_sale.svg";
import shoppingcart from "../../assets/icons/icon_shopping_cart.svg"
import MenuDesktop from "../menu-desktop/MenuDesktop";
import MenuMobile from "../menu-mobile/MenuMobile";
import ShoppingCar from "../../containers/shopping-car/ShoppingCar";
import AppContext from "../../context/AppContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [shopping, setShopping] = useState(false);
  const {state} = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleShopping = () => {
    setShopping(!shopping);
  }
  return (
    <nav className="navbar">
      <img onClick={handleToggle} className="nav-menu" src={menu} alt="menu" />
      <div className="navbar-rigth">
        <img className="nav-logo" src={logo} alt="logo" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li><a href="">Clothes</a></li>
          <li><a href="">Electronics</a></li>
          <li><a href="">Furniture</a></li>
          <li><a href="">Toys</a></li>
          <li><a href="">Others</a></li>
        </ul>
      </div>
      <div className="navbar-left">
        <p onClick={handleToggle}>yo@example.com</p>
        <div onClick={handleShopping} className="navbar-shoping">
          <img src={shoppingcart} alt="" />
          {
            state.cart.length ? (
              <div>{state.cart.length}</div>
            ):"" 
          }
        </div>
      </div>
      {
        toggle ? (
          <>
            <MenuDesktop/>
            <MenuMobile/>
          </>
        ): ""
      }
      {
        shopping ?(
          <ShoppingCar handle={handleShopping}/>
        ):(
          ""
        )
      }
    </nav>
  );
};

export default Header;
