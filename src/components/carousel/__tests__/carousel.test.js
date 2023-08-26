// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Constants
import { MULTIPLE_STOCK_DATA } from "../../../constants/mockData";

// Components
import Carousel from "../Carousel";
import StockOverview from "../../stockOverview";

describe("Testing the Carousel component", () => {
  test("Should match snapshot", () => {
    const tree = renderer
      .create(<Carousel data={MULTIPLE_STOCK_DATA} isCarouselLoading={true} componentProps={{ isStockOverviewLoading: true }} component={StockOverview} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render navigation buttons", () => {
    render(<Carousel data={MULTIPLE_STOCK_DATA} isCarouselLoading={true} componentProps={{ isStockOverviewLoading: true }} component={StockOverview} />);
    const leftNavButton = screen.getAllByAltText("left-icon");
    const rightNavButton = screen.getAllByAltText("right-icon");
    expect(rightNavButton.length).toBe(1);
    expect(leftNavButton.length).toBe(1);
  });
});
