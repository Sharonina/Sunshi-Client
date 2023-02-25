import { screen, render } from "../../../test/utils";
import Login from "./Login.component";
import { MemoryRouter } from "react-router-dom";
import { routes } from "@/utils/constants/routes";

describe("Login", () => {
  it("should render the login", () => {
    render(
      <MemoryRouter initialEntries={[routes.LOGIN]}>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByTestId("login-page")).toBeDefined();
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeDefined();
    expect(submitButton.getAttribute("disabled")).toBeDefined();
  });

  it("should enable submit button when email and password are valid", () => {
    render(
      <MemoryRouter initialEntries={[routes.LOGIN]}>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getTestById("email-input");
    const passwordInput = screen.getTestById("password-input");
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton.getAttribute("disabled")).toBeDefined();
    emailInput.setAttribute("value", "shadmin@sunshi.com");
    passwordInput.setAttribute("value", "123456"),
      expect(submitButton.getAttribute("disabled")).toEqual("");
  });
});
