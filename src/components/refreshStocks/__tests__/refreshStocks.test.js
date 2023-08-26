// Utils
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import RefreshStocks from "../RefreshStocks";

// Helpers
import {
  convertMilliSecondsToSeconds,
  convertSecondsToMilliSeconds,
} from "../refreshStocks.helpers";

describe("Testing the RefreshStocks component", () => {
  test("Should match snapshot", () => {
    const tree = renderer.create(<RefreshStocks />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should handle input change", () => {
    render(<RefreshStocks />);
    const searchInput = screen.getByPlaceholderText(
      "Enter time in seconds and press Enter"
    );
    fireEvent.change(searchInput, { target: { value: "Intuit" } });
    expect(searchInput.value).toBe("Intuit");
  });
});

describe("Testing the RefreshStocks helpers", () => {
  test("Should convert milliseconds to seconds", () => {
    const result = convertMilliSecondsToSeconds(1000);
    expect(result).toBe(1);
  });

  test("Should convert seconds to milliseconds", () => {
    const result = convertSecondsToMilliSeconds(1);
    expect(result).toBe(1000);
  });
});
