import "./header.css";
import shoppingCart from "../images/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { useState } from "react";
import Cart from "./cartPage/Cart";

const Header = () => {
  const { numOfItemsInCart } = useCart();
  const navigate = useNavigate();
  const [cartShow, setCartShow] = useState(false);
  const [hideCartOverlay, setHideCartOverlay] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleOpenCart = () => {
    setCartShow(true);
    setHideCartOverlay(false);
    clearTimeout(timeoutId);
  };

  const handleCloseCart = () => {
    setCartShow(false);
    const newTimeoutId = setTimeout(() => {
      setHideCartOverlay(true);
    }, 1000);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div>
      <div className="cart-overlay">
        <div
          className={`cart-overlay-cart ${
            cartShow ? "cart-overlay-cart-visible" : "cart-overlay-cart-invisible"
          }`}
        >
          <Cart handleCloseCart={handleCloseCart} />
        </div>
        <div
          className={`cart-overlay-background ${
            cartShow ? "cart-overlay-background-visible" : "cart-overlay-background-invisible"
          } ${hideCartOverlay ? "cart-background-disabled" : ""}`}
          onClick={() => handleCloseCart()}
        ></div>
      </div>
      <div className="header-wrapper-background">
        <div className="header-wrapper">
          <div className="header-title" onClick={() => navigate("/")}>
            UNREAL CLOTHING
          </div>
          <div className="spacer"></div>
          <div className="header-buttons">
            <button className="header-button home-button" onClick={() => navigate("/")}>
              Home
            </button>
            <button className="header-button products-button" onClick={() => navigate("/products")}>
              Products
            </button>
            <button className="header-button contact-button" onClick={() => navigate("/contact")}>
              Contact
            </button>
            <button
              className="header-button cart-button"
              onClick={() => {
                handleOpenCart();
              }}
            >
              <div className="shopping-cart-circle">
                <img
                  src={shoppingCart}
                  alt="Shopping cart button. Go to cart."
                  className="shopping-cart-logo"
                />
                <div className={`item-count ${numOfItemsInCart === 0 ? "hidden" : ""}`}>
                  {numOfItemsInCart}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
