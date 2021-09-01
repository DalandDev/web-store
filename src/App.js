import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from "./features/cart/Cart";
import Catalog from "./features/catalog/Catalog";
import Home from "./features/home/Home";
import ProductPage from './features/product-page/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/catalog" component={Catalog}></Route>
        <Route exact path="/product/:id" component={ProductPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
