import { useContext } from "react"
import { CartContext } from "../../../store/cart-context"
import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = ({ name, description, price, id, namem, amount, price }) => {
  const cartContext = useContext(CartContext)
  const dynamicPrice = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartContext.addItem({ id, name, amount, price })
  }

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{dynamicPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
