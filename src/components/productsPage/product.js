import "./product.css";
import { useCart } from "../CartContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import checkSymbol from "./../../images/check-symbol.svg";

const Product = (props) => {
  const { addItemToCart, addToCartTotal } = useCart();
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [itemAddedToCart, setItemAddedToCart] = useState(false);

  const handleAddToCartClicked = () => {
    setAddToCartClicked(true);
    setTimeout(() => {
      setAddToCartClicked(false);
    }, 100);
  };

  const passItem = () => {
    const { title, price, image } = props;
    const id = uuidv4();
    const item = {
      id,
      title,
      price,
      priceForAll: price,
      image,
      numOfItemInCart: 1,
    };
    addItemToCart(item);
    addToCartTotal();
  };

  const changeAddToCartTextOnClick = () => {
    setItemAddedToCart(true);
    return setTimeout(() => {
      setItemAddedToCart(false);
    }, 750);
  };

  return (
    <div className="all-products-wrapper">
      <div className="product-card">
        <img src={props.image} loading="lazy" alt="" className="product-image" />
        <div className="product-price">${props.price}</div>
        <div className="product-title">{props.title}</div>
        <div className="product-add-to-cart-wrapper">
          <button
            className={`product-add-to-cart-button ${
              addToCartClicked ? "product-add-to-cart-button-clicked-button" : ""
            } ${itemAddedToCart ? "item-added-to-cart" : ""}`}
            onClick={() => {
              passItem();
              handleAddToCartClicked();
              changeAddToCartTextOnClick();
            }}
          >
            <div className="product-add-to-cart-text">
              {itemAddedToCart ? <img src={checkSymbol} alt="Added to cart" /> : "Add to cart"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
