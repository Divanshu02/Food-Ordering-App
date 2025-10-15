import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import {  Route } from "lucide-react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/specials" element={<div>Specials Page</div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        {/* <Route path="/login" element={<div>Login Page</div>} /> */}
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/about" element={<div>About Us Page</div>} /> */}
        {/* <Route path="/faq" element={<div>FAQ Page</div>} /> */}
      </Routes>
    </>
  );
}

export default App;
