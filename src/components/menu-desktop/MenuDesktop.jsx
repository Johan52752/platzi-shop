import React from "react";
import "./MenuDesktop.css";

const MenuDesktop = () => {
  return (
    <div className="menu-desktop">
      <ul>
        <li>
          <a href="">My orders</a>
        </li>
        <li>
          <a href="">My account</a>
        </li>
        <li>
          <a href="">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
