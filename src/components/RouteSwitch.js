import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./homepage/Homepage";
import Products from "./productsPage/Products";
import Cart from "./cartPage/Cart";
import Contact from "./contactPage/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
