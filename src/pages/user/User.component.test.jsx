import { screen, render } from "@/test/utils";
import User from "./User.component";

describe("User", () => {
  it("should render the user", () => {
    render(<User />);
    expect(screen.getByTestId("user-page")).toBeDefined();
  });
});
