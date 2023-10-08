import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App.jsx";
import { UserProvider } from "./contexts/user.context.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";
import { CategoriesProvider } from "./contexts/categories.context.jsx";

import { store } from "./store/store.js";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
