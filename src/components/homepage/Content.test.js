import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Content from "./Content";
import { CartProvider } from "./../CartContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import Products from "../productsPage/Products";

const renderSetup = () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <Content />
      </CartProvider>
    </MemoryRouter>
  );
};

describe("Content component", () => {
  it("renders the display image(s)", () => {
    renderSetup();
    const displayImage = screen.getByAltText("background display 1");
    expect(displayImage).toBeInTheDocument();
  });

  it("redirects the user to the product page", async () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );
    const shopNowButton = screen.getByRole("button", { name: "SHOP NOW" });
    fireEvent.click(shopNowButton);
    await screen.findByText("White Cotton Polo Shirt");
    expect(screen.getByText("White Cotton Polo Shirt")).toBeInTheDocument();
  });
});
