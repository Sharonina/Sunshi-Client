import { screen, render } from "@/test/utils";
import Layout from "./Layout.component";
import { MemoryRouter } from "react-router-dom";
import { routes } from "@/utils/constants/routes";

describe("Layout", () => {
  it("should render the layout", () => {
    render(
      <MemoryRouter initialEntries={[routes.HOME]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("layout-container")).toBeDefined();
  });
});
