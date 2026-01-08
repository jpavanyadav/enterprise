import React from "react";

const ProductCard = ({ title, description, image, features, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <p className="price">{price}</p>
    </div>
  );
};

export default ProductCard;
