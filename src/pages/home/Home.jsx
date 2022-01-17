import React from "react";
import Header from "../../components/header/Header";
import MenuDesktop from "../../components/menu-desktop/MenuDesktop";
import MenuMobile from "../../components/menu-mobile/MenuMobile";
import Search from "../../components/search/Search";
import ProductsContainer from "../../containers/products-container/ProductsContainer";
import ShoppingCar from "../../containers/shopping-car/ShoppingCar";
import AsideCard from "../../containers/aside-card/AsideCard";
import './Home.css'

const Home = () => {
    return(
        <div className="Home">
            <Header />
            {/* <MenuDesktop /> */}
            {/* <MenuMobile /> */}
            {/* <ShoppingCar /> */}
            {/* <AsideCard /> */}
            <section className="section-products">
                <Search />
                <ProductsContainer />
            </section>
        </div>
    );
}
export default Home;