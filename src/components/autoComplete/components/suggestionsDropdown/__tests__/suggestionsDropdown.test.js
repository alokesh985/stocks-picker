// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import SuggestionsDropdown from "../SuggestionsDropdown";

// Constants
import { SUGGESTIONS } from "../../../../../constants/mockData";

describe("Testing the SuggestionDropdown component", () => {
  test("Should match snapshot", () => {
    const tree = renderer
      .create(<SuggestionsDropdown suggestions={SUGGESTIONS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render loader properly", () => {
    render(<SuggestionsDropdown isAutoSuggestLoading={true} />);
    const loader = screen.getAllByAltText("loader");
    expect(loader.length).toBe(1);
  });
});
