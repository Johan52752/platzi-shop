import React from "react";
import './MyOrderContainer.css';
import Order from "../../components/order/Order";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";

const MyOrderContainer = () => {
    return(
        <div className="my-order-container">
            <h1>My order</h1>
            <div className="my-order-content">
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <ShoppingCart img="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Byke" price="$30,00" />
                <ShoppingCart img="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Byke" price="$30,00" />
                <ShoppingCart img="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Byke" price="$30,00" />
                <ShoppingCart img="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Byke" price="$30,00" />
                <ShoppingCart img="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" name="Byke" price="$30,00" />
            </div>
        </div>
    );
}

export default MyOrderContainer;