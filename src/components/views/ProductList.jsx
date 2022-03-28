import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import '../styles/Products.css';

const ProductList = () => {
  
  const products = useSelector((state) => state.products.products);

  return (
    <div className="container cards">
      <h1>
        Our <span>Products</span>
      </h1>
      <div>
        <Product products = {products} />
      </div>
    </div>
  );
};

export default ProductList;
