import { forwardRef } from "react"
import styles from "./Input.module.css"

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  )
})

export default Input
