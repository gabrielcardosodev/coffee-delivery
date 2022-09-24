import { produce } from 'immer'
import { createContext, ReactNode, useState } from 'react'

import { Coffee } from '../@types/coffee'

interface CartItem extends Coffee {
  quantity: number
}

interface CoffeeContextType {
  cart: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeInCart: (coffee: CartItem) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cart.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cart, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCart(newCart)
  }

  function removeCoffeeInCart(coffee: CartItem) {
    const filteredCoffee = cart.filter((cartItem) => cartItem.id === coffee.id)

    const newCart = produce(cart, (draft) => {
      const index = filteredCoffee.indexOf(coffee)

      if (filteredCoffee) {
        draft.splice(index, 1)
      }
    })

    setCart(newCart)
  }

  console.log(cart)

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeInCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
