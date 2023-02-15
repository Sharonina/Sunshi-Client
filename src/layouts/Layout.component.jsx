import React from "react";
import { Outlet, Link } from "react-router-dom";
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
              <button>btn</button>
            </div>
          </div>
          <nav>
            <Link to={routes.HOME}>Home</Link>
            <Link to={routes.PRODUCTS}>Products</Link>
            <Link to={routes.ORDERS}>Orders</Link>
            <Link to={routes.USERS}>Users</Link>
          </nav>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
