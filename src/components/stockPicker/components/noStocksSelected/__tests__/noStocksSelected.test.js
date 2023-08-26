import React from "react";

// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import NoStocksSelected from "../NoStocksSelected";

describe("Testing the NoStocksSelected component", () => {
  test("Should show the correct message", () => {
    render(<NoStocksSelected />);
    const line1 = screen.getByText("No Stocks Selected!");
    const line2 = screen.getByText(
      "Please search for a stock on the search bar above"
    );
    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
  });

  test("Should match snapshot", () => {
    const tree = renderer.create(<NoStocksSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
