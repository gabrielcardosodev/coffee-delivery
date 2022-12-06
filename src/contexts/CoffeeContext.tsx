import { produce } from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";

import { Coffee } from "../@types/coffee";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CoffeeContextType {
  cart: CartItem[];
  purchaseTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  removeCoffeeInCart: (id: number) => void;
  changeCartItemQuantity: (id: number, type: "increase" | "decrease") => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

const COFFEE_CART_STORAGE_KEY = "coffeeDelivery:cart";

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(COFFEE_CART_STORAGE_KEY);

    if (storedCart) {
      return JSON.parse(storedCart);
    }

    return [];
  });

  const purchaseTotal = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cart.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cart, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCart(newCart);
  }

  function removeCoffeeInCart(id: number) {
    const newCart = produce(cart, (draft) => {
      const coffeeAlreadyExistsInCart = cart.findIndex(
        (item) => item.id === id
      );

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1);
      }
    });

    setCart(newCart);
  }

  function changeCartItemQuantity(id: number, type: "increase" | "decrease") {
    const newCart = produce(cart, (draft) => {
      const coffeeExistsInCart = cart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCart(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        purchaseTotal,
        addCoffeeToCart,
        removeCoffeeInCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
