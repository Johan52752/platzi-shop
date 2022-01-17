import React from "react";
import './MenuMobile.css';

const MenuMobile = () => {
    return(
        <div className="menu-mobile">
        <ul>
            <li>
                <a href="">CATEGORIES</a>
            </li>
            <li>
                <a href="">All</a>
            </li>
            <li>
                <a href="">Clothes</a>
            </li>
            <li>
                <a href="">Electronics</a>
            </li>
            <li>
                <a href="">Furnitures</a>
            </li>
            <li>
                <a href="">Toys</a>
            </li>
            <li>
                <a href="">Others</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="">My orders</a>
            </li>
            <li>
                <a href="">My account</a>
            </li>
        </ul>
        <ul>
            <li>
                <a className="email" href="">yo@example.com</a>
            </li>
            <li>
                <a className="sign-out" href="">Sign out</a>
            </li>
        </ul>
    </div>
    );

}

export default MenuMobile;