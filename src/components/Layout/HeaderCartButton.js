import { useContext } from "react"
import { CartContext } from "../../store/cart-context"
import CartIcon from "./CartIcon"
import styles from "./HeaderCartButton.module.css"

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext)

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {items.reduce((currentNumber, item) => {
          return currentNumber + item.amount
        }, 0)}
      </span>
    </button>
  )
}

export default HeaderCartButton
