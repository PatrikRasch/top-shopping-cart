import React, { useContext, useState, useEffect } from "react"; // The basic imports

const CartContext = React.createContext(); // Creates overall context

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  const calculateTotalPriceItem = (array, index) => {
    const priceForOne = array[index].price; // Declare fixed price
    const totalOfItemInCart = array[index].numOfItemInCart; // Declare number of item in cart
    array[index].priceForAll = Math.floor(priceForOne * totalOfItemInCart * 100) / 100; // Calculate total price for all
  };

  const addItemToCart = (item) => {
    let duplicate = null; // Variable to match itemsInCart item
    // Check if the item already exists in the array
    const itemAlreadyExists = itemsInCart.some((element) => {
      if (item.title === element.title) {
        duplicate = item;
        // Find the item in the array that is to be updated
        const toBeUpdated = itemsInCart.find((item) => item.title === duplicate.title);
        const duplicatedArray = [...itemsInCart]; // Make duplicate of itemsInCart
        const indexToBeUpdated = duplicatedArray.indexOf(toBeUpdated); // Find the index to update in itemsInCart
        duplicatedArray[indexToBeUpdated].numOfItemInCart += 1; // Add +1 to the numOfItemInCart to the item
        calculateTotalPriceItem(duplicatedArray, indexToBeUpdated);
        setItemsInCart(duplicatedArray); // Update state
        return true; // Item exists
      }
      return false; // Item doesn't exist
    });
    if (itemAlreadyExists) return;
    else {
      setItemsInCart((current) => [...current, item]);
    } // Runs only when item doesn't exist → adds new item to state
  };

  /// Update the subtotal price the user has to pay
  useEffect(() => {
    const initialValue = 0;
    const newSubtotalPrice = itemsInCart.reduce(
      (acc, currentValue) => currentValue.priceForAll + acc,
      initialValue
    );
    const newSubtotalPriceRounded = Math.floor(newSubtotalPrice * 100) / 100;
    setSubtotalPrice(newSubtotalPriceRounded);
  }, [itemsInCart, numOfItemsInCart]);

  /// Updates the total number of items in the cart
  const updateTotalNumOfItemsInCart = () => {
    const initialValue = 0;
    const totalItemsInCart = itemsInCart.reduce(
      (acc, currentValue) => currentValue.numOfItemInCart + acc,
      initialValue
    );
    setNumOfItemsInCart(totalItemsInCart);
  };

  /// Add or remove an extra of item that already exists in cart
  const addOrRemoveOneOfItem = (item, plusOrMinus) => {
    const duplicatedArray = [...itemsInCart];
    const indexOfItem = itemsInCart.indexOf(item);
    duplicatedArray[indexOfItem].numOfItemInCart += plusOrMinus;
    calculateTotalPriceItem(duplicatedArray, indexOfItem);
    setItemsInCart(duplicatedArray);
    updateTotalNumOfItemsInCart();
    removeItemFromCart();
  };

  const addToCartTotal = () => {
    setNumOfItemsInCart(numOfItemsInCart + 1);
  };

  /// Removes items from the cart if the number of the item in the cart is 0
  const removeItemFromCart = () => {
    itemsInCart.forEach((item) => {
      if (item.numOfItemInCart === 0) {
        const duplicatedArray = [...itemsInCart];
        const itemRemovedArray = duplicatedArray.filter((element) => {
          return element !== item;
        });
        setItemsInCart(itemRemovedArray);
      }
    });
  };

  const resetCart = () => {
    setItemsInCart([]);
    setNumOfItemsInCart(0);
  };

  const cartState = {
    itemsInCart,
    numOfItemsInCart,
    subtotalPrice,
    addToCartTotal,
    addItemToCart,
    addOrRemoveOneOfItem,
    resetCart,
  };

  return <CartContext.Provider value={cartState}>{children}</CartContext.Provider>;
}
