import React from "react";
import './MyOrdersContainer.css';
import Order from "../../components/order/Order";

const MyOrdersContainer = () => {
    return(
        <div className="my-order-container">
            <h1>My orders</h1>
            <div className="my-order-content">
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
                <Order orderDate="03.25.21" numberOfArticles="6" orderPrice="$560.00"/>
            </div>
        </div>
    );
}

export default MyOrdersContainer;