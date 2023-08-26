// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import Loader from "../Loader";

describe("Testing the Loader component", () => {
  test("Should match snapshot", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render 1 loader", () => {
    render(<Loader />);
    const loaderImage = screen.getAllByAltText("loader");
    expect(loaderImage.length).toBe(1);
  })
});
