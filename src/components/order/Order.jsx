import React from "react";
import "./Order.css";
import flechita from "../../assets/icons/flechita.svg"

const Order = ({orderDate, numberOfArticles, orderPrice}) => {
  return (
    <div class="order">
      <p>
        <span>{orderDate}</span>
        <span>{numberOfArticles}</span>
      </p>
      <p>{orderPrice}</p>
      <img src={flechita} alt="arrow" />
    </div>
  );
};

export default Order;
