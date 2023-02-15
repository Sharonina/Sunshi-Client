import { screen, render } from "@/test/utils";
import Layout from "./Layout.component";

describe("Layout", () => {
  it("should render the layout", () => {
    render(<Layout />);
    expect(screen.getByTestId("layout-container")).toBeDefined();
  });
});
