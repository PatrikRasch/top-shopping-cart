import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import Content from "./homepage/Content";
import Contact from "./contactPage/Contact";
import Products from "./productsPage/Products";
import Cart from "./cartPage/Cart";
import { CartProvider, useCart } from "./CartContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";

const renderSetup = () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <Header />
      </CartProvider>
    </MemoryRouter>
  );
};

describe("Header component", () => {
  it("renders UNREAL CLOTHING", () => {
    renderSetup();
    const headerTitle = screen.getByText("UNREAL CLOTHING");
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toBeVisible();
  });

  it("renders the home button", () => {
    renderSetup();
    const homeButton = screen.getByRole("button", { name: "Home" });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toBeVisible();
  });

  it("renders the products button", () => {
    renderSetup();
    const productsButton = screen.getByRole("button", { name: "Products" });
    expect(productsButton).toBeInTheDocument();
    expect(productsButton).toBeVisible();
  });

  it("renders the contact button", () => {
    renderSetup();
    const contactButton = screen.getByRole("button", { name: "Contact" });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toBeVisible();
  });

  it("changes to homepage when home button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Content />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );

    const homeButton = screen.getByRole("button", { name: "Home" });
    fireEvent.click(homeButton);
    expect(screen.getByText("SHOP NOW")).toBeInTheDocument();
  });

  // Snapshot test
  it("changes to homepage when home button is clicked, snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/contact"]}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Content />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );
    const homeButton = screen.getByRole("button", { name: "Home" });
    fireEvent.click(homeButton);
    expect(asFragment()).toMatchSnapshot();
  });

  it("changes to products page when product button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );
    const productButton = screen.getByRole("button", { name: "Products" });
    fireEvent.click(productButton);
    expect(screen.getByText("White Cotton Polo Shirt")).toBeInTheDocument();
  });

  it("changes to contact page when contact button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );
    const contactButton = screen.getByRole("button", { name: "Contact" });
    fireEvent.click(contactButton);
    expect(screen.getByText("Unreal Clothing")).toBeInTheDocument();
  });
});
