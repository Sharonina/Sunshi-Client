import React from "react";
import "./App.styl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutComponent from "./layouts/Layout.component";
import HomeComponent from "./pages/home/Home.component";
import LoginComponent from "./pages/login/Login.component";
import OrderComponent from "./pages/order/Order.component";
import ProductComponent from "./pages/product/Product.component";
import UserComponent from "./pages/user/User.component";
import { protectionTypes } from "./utils/constants/authentication";
import { routes } from "./utils/constants/routes";
import ProtectedRoute from "./utils/ProtectedRoute/ProtectedRoute.component";
import { UserContext } from "./context/UserContext";

function App() {
  //simpre debe retornar un nodo de react. puede ser un fragment <> agrupa sin dar un padre
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute protections={[protectionTypes.isLogged]} isLogged>
                <LayoutComponent />
              </ProtectedRoute>
            }
          >
            <Route index path={routes.HOME} element={<HomeComponent />} />
            <Route path={routes.PRODUCTS} element={<ProductComponent />} />
            <Route path={routes.ORDERS} element={<OrderComponent />} />
            <Route
              path={routes.USERS}
              element={
                <ProtectedRoute protections={[protectionTypes.isAdmin]} isAdmin>
                  <UserComponent />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path={routes.LOGIN} element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
