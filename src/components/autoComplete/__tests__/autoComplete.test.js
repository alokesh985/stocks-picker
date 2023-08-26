// Utils
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

// Components
import Autocomplete from "../AutoComplete";

// Constants
import { SUGGESTIONS } from "../../../constants/mockData";

describe("Testing the AutoComplete component", () => {
  test("Should match snapshot", () => {
    const tree = renderer
      .create(
        <Autocomplete
          placeholderText="Test placeholder text"
          suggestions={SUGGESTIONS}
          shouldShowSuggestions={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should render search button", () => {
    render(
      <Autocomplete
        placeholderText="Test placeholder text"
        suggestions={SUGGESTIONS}
        shouldShowSuggestions={true}
      />
    );
    const searchButton = screen.getAllByAltText("search-icon");
    expect(searchButton.length).toBe(1);
  });
});
