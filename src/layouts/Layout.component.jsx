import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.styl";
import logo from "../assets/sunshi2.png";
import { routes } from "../utils/constants/routes";

const Layout = () => {
  const today = new Date();
  return (
    <div data-testid="layout-container">
      <main>
        <header>
          <div className={styles.headerSup}>
            <figure>
              <img src={logo} />
            </figure>
            <div className={styles.headerSupRight}>
              <div>
                <p className={styles.date}>
                  {today.toLocaleString("en-eu", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <p className={styles.userName}>Sharoninadmin</p>
              </div>
              <button></button>
            </div>
          </div>
          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isLinkActive : undefined
              }
              to={routes.HOME}
              data-testid="nav-home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isLinkActive : undefined
              }
              to={routes.PRODUCTS}
              data-testid="nav-products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isLinkActive : undefined
              }
              to={routes.ORDERS}
              data-testid="nav-orders"
            >
              Orders
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.isLinkActive : undefined
              }
              to={routes.USERS}
              data-testid="nav-users"
            >
              Users
            </NavLink>
          </nav>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
