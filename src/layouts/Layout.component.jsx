import React, { useContext } from "react";
import clsx from "clsx";
import { Outlet, NavLink, Link } from "react-router-dom";
import styles from "./Layout.module.styl";
import logo from "../assets/sunshi2.png";
import { routes } from "../utils/constants/routes";
import { UserContext } from "@/context/UserContext";
import { UtilsContext } from "@/context/UtilsContext";

const Layout = () => {
  const { userInfo, handleLogout } = useContext(UserContext);
  const { setShowSnackbar, setSnackbar } = useContext(UtilsContext);
  const isAdmin = userInfo.admin;
  const today = new Date();

  const [openMenu, setOpenMenu] = React.useState(false);

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
                <p className={styles.userName}>
                  {userInfo.first_name} {userInfo.last_name}
                </p>
              </div>
              <button
                className="openMenu"
                onClick={() => setOpenMenu(!openMenu)}
              ></button>
              {openMenu && (
                <div className={styles.optionsMenu}>
                  <Link
                    className={styles.option}
                    to={routes.HOME}
                    data-testid="nav-profile"
                    onClick={() => {
                      setShowSnackbar(true);
                      setSnackbar({
                        message: "Profile page is not implemented yet",
                        severity: "warning",
                      });
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    className={styles.option}
                    to={routes.LOGIN}
                    data-testid="nav-logout"
                    onClick={() => handleLogout()}
                  >
                    Log out
                  </Link>
                </div>
              )}
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
            {isAdmin && (
              <NavLink
                className={({ isActive }) =>
                  clsx(isActive && styles.isLinkActive)
                }
                to={routes.USERS}
                data-testid="nav-users"
              >
                Users
              </NavLink>
            )}
          </nav>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
