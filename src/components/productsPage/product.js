import "./product.css";
import { useCart } from "../CartContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Product = (props) => {
  const { addItemToCart, addToCartTotal } = useCart();
  const [addToCartClicked, setAddToCartClicked] = useState(false);

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

  return (
    <div className="all-products-wrapper">
      <div className="product-card">
        <img src={props.image} alt="" className="product-image" />
        <div className="product-price">${props.price}</div>
        <div className="product-title">{props.title}</div>
        <div className="product-add-to-cart-wrapper">
          <button
            className={`product-add-to-cart-button ${
              addToCartClicked ? "product-add-to-cart-button-clicked-button" : ""
            }`}
            onClick={() => {
              passItem();
              handleAddToCartClicked();
            }}
          >
            <div className="product-add-to-cart-text">Add to cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
