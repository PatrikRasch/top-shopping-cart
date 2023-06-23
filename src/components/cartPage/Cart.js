import "./cart.css";
import { useCart } from "../CartContext";

const Cart = (props) => {
  const { itemsInCart, addOrRemoveOneOfItem, subtotalPrice, resetCart } = useCart();

  const checkout = () => {
    if (itemsInCart.length === 0) {
      return alert("Your cart is empty");
    }
    alert("Thank you for checking out my project");
    props.handleCloseCart();
    setTimeout(() => {
      resetCart();
    }, 600);
  };

  const emptyBasketMessage = () => {
    return (
      <div className="empty-basket-message">
        Your basket is empty, go add some unreal clothing to it!
      </div>
    );
  };
  const displayCartItems = () => {
    if (itemsInCart.length === 0) return;
    return itemsInCart.map((item) => (
      <div className="cart-card">
        <div className="cart-card-left">
          <img src={item.image} alt="" className="cart-item-image" />
        </div>
        <div className="cart-card-right">
          <div className="cart-item-title">{item.title}</div>
          <div className="cart-item-price">${item.priceForAll}</div>
          <div className="cart-number-of-item-wrapper">
            <button className="remove-one-item" onClick={() => addOrRemoveOneOfItem(item, -1)}>
              -
            </button>
            <div className="cart-number-of-item">{item.numOfItemInCart}</div>
            <button className="add-one-item" onClick={() => addOrRemoveOneOfItem(item, 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="cart">
      <div className="cart-title">Your Basket</div>
      <div className="cart-all-cards">
        {itemsInCart.length === 0 ? emptyBasketMessage() : displayCartItems()}
      </div>
      <div className="cart-summary">
        <div className="totalPrice">Total: ${subtotalPrice}</div>
        <button className="checkout-button" onClick={() => checkout()}>
          Checkout
        </button>
        <button className="close-button" onClick={() => props.handleCloseCart()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
