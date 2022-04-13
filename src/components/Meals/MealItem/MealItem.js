import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = ({ name, description, price }) => {
  const dynamicPrice = `$${price.toFixed(2)}`

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{dynamicPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem
