import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe(Product, () => {
  it("Has a pricetag", () => {
    render(<Product price={10} />);
    const priceElement = screen.getByText("10");
    expect(priceElement).toBeInTheDocument();
  });
});

/// "Render" renders out a "fake" version of your component
