import { screen, render, userEvent } from "@/test/utils";
import Layout from "./Layout.component";
import { MemoryRouter } from "react-router-dom";
import { routes } from "@/utils/constants/routes";
import { waitFor } from "@testing-library/react";

describe("Layout", () => {
  it("should render the layout", () => {
    render(
      <MemoryRouter initialEntries={[routes.HOME]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("layout-container")).toBeDefined();
  });

  it("should have isLinkActive class on home button while on home route", () => {
    render(
      <MemoryRouter initialEntries={[routes.HOME]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("nav-home").getAttribute("class")).toContain(
      "isLinkActive"
    );
  });

  it("should have isLinkActive class on products button while on products route", () => {
    render(
      <MemoryRouter initialEntries={[routes.PRODUCTS]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("nav-products").getAttribute("class")).toContain(
      "isLinkActive"
    );
  });

  it("should have isLinkActive class on orders button while on orders route", () => {
    render(
      <MemoryRouter initialEntries={[routes.ORDERS]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("nav-orders").getAttribute("class")).toContain(
      "isLinkActive"
    );
  });

  it("should have isLinkActive class on users button while on users route", () => {
    render(
      <MemoryRouter initialEntries={[routes.USERS]}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByTestId("nav-users").getAttribute("class")).toContain(
      "isLinkActive"
    );
  });
});
