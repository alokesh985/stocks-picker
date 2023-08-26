import React from "react";

// Utils
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import StockPicker from "../StockPicker";

// Helpers
import { getSuggestions, getFilteredSuggestions } from "../stockPicker.helpers";

// Mock Data
import { SYMBOL_SEARCH_MOCK, STOCK_DATA } from "../../../constants/mockData";

describe("Testing the StockPicker component", () => {
  test("Should show heading and placeholder properly", () => {
    render(<StockPicker />);
    const header = screen.getByText("Stock Picker");
    expect(header).toBeInTheDocument();
    const inputPlaceholder = screen.getByPlaceholderText(
      "Enter stock name here"
    );
    expect(inputPlaceholder).toBeInTheDocument();
  });

  test("Should handle search input", () => {
    render(<StockPicker />);
    const searchInput = screen.getByPlaceholderText("Enter stock name here");
    fireEvent.change(searchInput, { target: { value: "Intuit" } });
    expect(searchInput.value).toBe("Intuit");
  });

  test("Should match snapshot", () => {
    const tree = renderer.create(<StockPicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Testing StockPicker component helpers", () => {
  test("Should get stock suggestions from API response", () => {
    const result = getSuggestions(SYMBOL_SEARCH_MOCK);
    expect(result).toEqual(["IBM", "IBML"]);
  });
  test("Should filter suggestions", () => {
    const filteredSuggestions = getFilteredSuggestions(STOCK_DATA, ["IBM", "MSFT"]);
    expect(filteredSuggestions).toEqual(["IBM"]);
  })
});
