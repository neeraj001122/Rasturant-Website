import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Cart from './components/Cart/Cart'
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const [cartShown, setCartShown] = useState(false)

  const cartShownHandler = () => {
    setCartShown(true)
  }

  const cartHideHandler = () => {
    setCartShown(false)
  }

  return (
    <CartContextProvider>
      {cartShown && <Cart onClose={cartHideHandler}></Cart>}
      <Header onShown = {cartShownHandler}></Header>
      </CartContextProvider>
  );
}

export default App;
