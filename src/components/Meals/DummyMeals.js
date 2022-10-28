import React from "react";
import Card from "../UI/Card";
import classes from './DummyMeals.module.css'
import glasses from './DummyMeals1.module.css'
import MealsForm from "./MealsForm";
 
const DummyMeals = () => {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

      const mealsList = DUMMY_MEALS.map((meals) => {
        return<ul key={meals.name}> 
            <li className={glasses.meal} >{meals.name} <MealsForm /></li>
            <li className={glasses.description}>{meals.description}</li>
            <li className={glasses.price}>{meals.price}</li>
          </ul>
      })
  return <section className={classes.meals}>
    <Card>
        {mealsList}
    </Card>
  </section>
}
    

export default DummyMeals