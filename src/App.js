import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//Reducer

//react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
//Intintial State
import { createStore } from "redux";

import { reducer } from "./reducer";
const intitialStore = {
  cart: cartItems,
  total: 20,
  amount: 5,
};
//Store
const store = createStore(reducer, intitialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
