import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import {  Route } from "lucide-react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

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
      </Routes>
    </>
  );
}

export default App;
