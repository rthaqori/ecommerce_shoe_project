import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/NavComponents/Header";
import Footer from "./Components/NavComponents/Footer";
import Home from "./Components/MainPage/Home";
import ProductDetails from "./Components/ProductDetailsPage/ProductDetails";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import WishList from "./Components/WishList/WishList";

const App = () => {
  return (
    <div className="overflow-x-clip">
      <Router>
        {/* basename="/ecommerce_shoe_project" */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
