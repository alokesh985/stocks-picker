// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import StockOverview from "../StockOverview";

// Mock data
import { STOCK_DATA } from "../../../constants/mockData";

describe("Testing the StockOverview component", () => {
  test("Should match snapshot", () => {
    const tree = renderer.create(<StockOverview />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render delete button", () => {
    render(<StockOverview data={STOCK_DATA} />);
    const deleteIconImages = screen.getAllByAltText("delete-icon");
    expect(deleteIconImages.length).toBe(1);
  })
});
