import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div data-testId="layout-container">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
