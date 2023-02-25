import { screen, render, waitFor } from "../../../test/utils";
import ProtectedRoute from "./ProtectedRoute.component";
import HomeComponent from "@/pages/home/Home.component";
import { protectionTypes } from "../constants/authentication";
import LoginComponent from "@/pages/login/Login.component";
import UserComponent from "@/pages/user/User.component";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";

describe("ProtectedRoute", () => {
  it("should render the protectedRoute without props", () => {
    render(
      <MemoryRouter>
        <ProtectedRoute children={<HomeComponent />} />
      </MemoryRouter>
    );
    expect(screen.getByTestId("home-page")).toBeDefined();
  });

  it("Should be redirected to home page if not an admin", () => {
    render(
      <MemoryRouter initialEntries={[routes.USERS]}>
        <Routes>
          <Route
            path={routes.USERS}
            element={
              <ProtectedRoute
                children={<UserComponent />}
                protections={[protectionTypes.isAdmin]}
                isAdmin={false}
              />
            }
          />
          <Route path={routes.HOME} element={<HomeComponent />} />
        </Routes>
      </MemoryRouter>
    );
    waitFor(() => expect(screen.getByTestId("home-page")).toBeDefined());
  });

  it("Should be redirected to login page if not logged", () => {
    render(
      <MemoryRouter initialEntries={[routes.HOME]}>
        <Routes>
          <Route
            path={routes.HOME}
            element={
              <ProtectedRoute
                children={<HomeComponent />}
                protections={[protectionTypes.isLogged]}
                isLogged={false}
              />
            }
          />
          <Route path={routes.LOGIN} element={<LoginComponent />} />
        </Routes>
      </MemoryRouter>
    );
    waitFor(() => expect(screen.getByTestId("login-page")).toBeDefined());
  });
});
