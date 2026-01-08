import React from "react";
import "../App.css";


const Intro = ({ onProductsClick }) => {
  return (
    <section className="intro">
      <h2>Welcome to OurDhanalaxmi Enterprises</h2>
      <p>
        We deliver high end products for the solutions you needed to achieve. Your health is our Priority
        
      </p>
      <button onClick={onProductsClick} className="btn">
        Products
      </button>
    </section>
  );
};

export default Intro;
