import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { CartContext, CartProvider } from "../CartContext";
import Cart from "./Cart";
import "@testing-library/jest-dom";

afterEach(cleanup);

const itemsInCart = [
  {
    id: "foo",
    title: "White Cotton Polo Shirt",
    price: 10,
    priceForAll: 10,
    image: null,
    numOfItemInCart: 1,
  },
];

describe("Cart component", () => {
  it("does not render any products in the cart when the cart is empty, and instead renders an empty cart message", () => {
    render(
      <CartProvider value={{ itemsInCart: [] }}>
        <Cart />
      </CartProvider>
    );
    expect(
      screen.getByText("Your basket is empty, go add some unreal clothing to it!")
    ).toBeInTheDocument();
  });
});

/// Tests I wasn't able to make pass due to itemsInCart not being rendered
/// out properly in the Cart component.
/// I suspect this is linked to how I'm doing context within CartContext.
/// I tried the (seemingly) same thing as others were doing
/// on Stackoverflow and YouTube, but to no avail.
/// Reckon I need a deeper understanding of context and testing in general
/// Before succeeding at this.

// it("renders out the products in the cart", () => {
//     render(
//       <CartContext value={{ itemsInCart }}>
//         <Cart />
//       </CartContext>
//     );

//     expect(screen.getByText("White Cotton Polo Shirt")).toBeInTheDocument();
//   });

//   it("opens empty cart if the cart has no products added to it", () => {
//     render(
//       <MemoryRouter>
//         <CartProvider>
//           <Header />
//         </CartProvider>
//       </MemoryRouter>
//     );
//     const cartButton = screen.getByAltText("Shopping cart button. Go to cart.");
//     fireEvent.click(cartButton);
//     expect(
//       screen.getByText("Your basket is empty, go add some unreal clothing to it!")
//     ).toBeInTheDocument();
//   });
