import { screen, render } from "@/test/utils";
import ProtetedRoute from "./ProtetedRoute.component";
import HomeComponent from "";

describe("ProtetedRoute", () => {
  it("should render the protetedRoute", () => {
    render(<ProtetedRoute children={<HomeComponent />} />);
    expect(screen.getByTestId("home-page")).toBeDefined();
  });
});
