import { useContext } from "react"
import Modal from "../UI/Modal"
import styles from "./Cart.module.css"
import CartContext from "../../store/cart-context"

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItems = cartContext.length > 0

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
