import React from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton></CartButton>
      </header>
      <div className={classes.main_image}>
        <img
          src="https://www.liveabout.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg"
          alt="Ramen"
        />
        </div>
    </React.Fragment>
  );
};

export default Header;
