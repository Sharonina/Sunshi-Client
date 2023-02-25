import { screen, render } from "../../../test/utils";
import Home from "./Home.component";

describe("Home", () => {
  it("should render the home", () => {
    render(<Home />);
    expect(screen.getByTestId("home-page")).toBeDefined();
  });
});
