import React, { useRef } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Products from "./components/Products";
import "./App.css"; 

function App() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Intro onProductsClick={scrollToProducts} />
      <div ref={productsRef}>
        <Products />
      </div>
    </div>
  );
}

export default App;
