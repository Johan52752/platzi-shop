import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import "./ProductsContainer.css";
import useData from "../../hooks/useData";
import AppContext from "../../context/AppContext";

const ProductsContainer = () => {
  const { products, loading } = useData();
  const { state } = useContext(AppContext);
  return (
    <div className="products-container">
      {
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
      {
        loading ? (
            <p>Loading...</p>
        ):(
            ""
        )
      }
    </div>
  );
};

export default ProductsContainer;
