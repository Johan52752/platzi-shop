import React from "react";
import "./Search.css";
import search from "../../assets/icons/search-solid.svg";
import chevron from "../../assets/icons/chevron-down-solid.svg";

const Search = () => {
  return (
    <div className="search">
      <div className="input search-product">
        <img src={search} alt="search" />
        <input className="input " type="text" placeholder="Buscar un producto" />
      </div>
      <ul className="product-filter">
        <li>All</li>
        <li>Clothes</li>
        <li>Electronics</li>
        <li>Furniture</li>
        <li>Toys</li>
        <li>Others</li>
      </ul>
      <div className="select-filter">
        <span>Order: </span>
        <select name="select">
          <option value="most-recent">Most recent</option>
        </select>
        <img src={chevron} alt="" />
      </div>
    </div>
  );
};

export default Search;
