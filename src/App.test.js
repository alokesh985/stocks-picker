import renderer from "react-test-renderer";
import App from './App';

test("Should match snapshot", () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
