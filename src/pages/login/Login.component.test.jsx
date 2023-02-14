import { screen, render } from "@/test/utils";
import Login from "./Login.component";

describe("Login", () => {
  it("should render the login", () => {
    render(<Login />);
    expect(screen.getByTestId("login-page")).toBeDefined();
  });
});
