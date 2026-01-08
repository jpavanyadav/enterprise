import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData";

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {productsData.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
