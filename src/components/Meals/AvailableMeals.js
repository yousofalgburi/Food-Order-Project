import { useEffect, useState } from "react"

import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-a4570-default-rtdb.firebaseio.com/meals.json"
      )
      const responseData = await response.json()

      const loadedMeals = []

      responseData.array.forEach((element) => {
        loadedMeals.push({
          id: element,
          name: responseData[element].name,
          description: responseData[element].description,
          price: responseData[element].price,
        })
      })

      console.log(loadedMeals)
      setMeals(loadedMeals)
    }
    fetchMeals()
  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
