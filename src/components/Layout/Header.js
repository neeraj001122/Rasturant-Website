import React from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
import MealsSummary from "./MealsSummary";
import DummyMeals from "../Meals/DummyMeals";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onclick={props.onShown} ></CartButton>
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="Ramen"
        />
        <MealsSummary></MealsSummary>
        <DummyMeals></DummyMeals>
        </div>
    </React.Fragment>
  );
};

export default Header;
