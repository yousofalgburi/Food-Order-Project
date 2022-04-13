import styles from "./Header.module.css"
import mealsImg from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = ({ onCartShow }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onCartShow} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </>
  )
}

export default Header
