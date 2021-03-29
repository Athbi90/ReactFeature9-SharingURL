// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";
import React, { useState } from "react";
import cookieStore from "./stores/CookieStore";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
// Data
import products from "./products";
import Signup from "./components/Signup";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(cookieStore.products);

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Link to="/"> Home </Link>
      <br />

      <Link to="/products"> Products </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList
            products={_products}
            deleteProduct={cookieStore.deleteProduct}
          />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
