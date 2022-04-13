import { createContext, useReducer } from "react"

export const CartContext = createContext()

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type == "ADD") return defaultCartState
}

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item })
  }

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
