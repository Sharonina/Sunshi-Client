import { screen, render, waitFor } from "@/test/utils";
import ProtetedRoute from "./ProtectedRoute.component";
import HomeComponent from "@/pages/home/Home.component";
import { protectionTypes } from "../constants/authentication";
import LoginComponent from "@/pages/login/Login.component";
import UserComponent from "@/pages/user/User.component";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";

describe("ProtetedRoute", () => {
  it("should render the protetedRoute without props", () => {
    render(
      <MemoryRouter>
        <ProtetedRoute children={<HomeComponent />} />
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
              <ProtetedRoute
                children={<UserComponent />}
                protections={[protectionTypes.isAdmin]}
                isAdmin={false}
              />
            }
          />
          <Route path={routes.HOME} elements={<HomeComponent />} />
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
              <ProtetedRoute
                children={<HomeComponent />}
                protections={[protectionTypes.isLogged]}
                isLogged={false}
              />
            }
          />
          <Route path={routes.LOGIN} elements={<LoginComponent />} />
        </Routes>
      </MemoryRouter>
    );
    waitFor(() => expect(screen.getByTestId("login-page")).toBeDefined());
  });
});
