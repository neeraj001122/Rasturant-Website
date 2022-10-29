import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Cart from './components/Cart/Cart'

function App() {
  const [cartShown, setCartShown] = useState(false)

  const cartShownHandler = () => {
    setCartShown(true)
  }

  const cartHideHandler = () => {
    setCartShown(false)
  }

  return (
    <div>
      {cartShown && <Cart onClose={cartHideHandler}></Cart>}
      <Header onShown = {cartShownHandler}></Header>
    </div>
  );
}

export default App;
