import { Coffee as CoffeeCup, Trash } from 'phosphor-react'
import React, { useContext, useState } from 'react'

import { Coffee } from '../../../../@types/coffee'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { currencyFormatted } from '../../../../utils/currencyFormatted'

interface CartItemsProps {
  coffee: Coffee
}

export function CartItems({ coffee }: CartItemsProps) {
  const { cart, removeCoffeeInCart } = useContext(CoffeeContext)
  const [quantity, setQuantity] = useState(0)

  function handleIncreaseQuantityByOne() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantityByOne() {
    setQuantity((state) => {
      const newState = state - 1

      return newState >= 0 ? newState : 0
    })
  }

  function handleRemoveItemInCart() {
    const coffeeToRemove = {
      ...coffee,
      quantity,
    }

    removeCoffeeInCart(coffeeToRemove)
  }

  return (
    <div className="">
      <strong className="font-baloo text-lg text-base-subtitle">
        Cafés selecionados
      </strong>

      <div className="mt-4 rounded-[6px_44px] bg-base-card p-10">
        <div className="flex flex-col gap-4">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <>
                <div className="flex gap-5" key={item.id}>
                  <img
                    className="h-16 w-16"
                    src={item.image}
                    alt={item.image}
                  />

                  <div className="flex flex-col">
                    <span className="text-base-subtitle">{item.name}</span>

                    <div className="flex gap-2">
                      <QuantityInput
                        handleDecreaseQuantityByOne={
                          handleDecreaseQuantityByOne
                        }
                        handleIncreaseQuantityByOne={
                          handleIncreaseQuantityByOne
                        }
                        quantity={item.quantity}
                      />

                      <button
                        onClick={handleRemoveItemInCart}
                        className="flex h-10 items-center gap-2 rounded-md bg-base-button p-2 text-xs uppercase transition-colors hover:bg-base-hover"
                      >
                        <Trash className="text-purple-primary" size={16} />
                        Remover
                      </button>
                    </div>
                  </div>

                  <span className="ml-[30px] justify-start font-bold text-base-text">
                    R$ {currencyFormatted(item.price)}
                  </span>
                </div>

                <hr color="#E6E5E5" className="my-6 w-full" />
              </>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="font-baloo text-lg text-base-title">
                Nenhum item adicionado ao carrinho
              </p>

              <CoffeeCup weight="fill" size={40} className="text-yellow-dark" />
            </div>
          )}

          {cart && cart.length > 0 && (
            <>
              <div className="flex w-full justify-between text-sm text-base-text">
                <span>Total de itens</span>
                <span className="text-base">R$ 29,70</span>
              </div>

              <div className="flex w-full justify-between text-sm text-base-text">
                <span>Entrega</span>
                <span className="text-base">R$ 3,50</span>
              </div>

              <div className="flex w-full justify-between text-xl font-bold text-base-subtitle">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>

              <button className="mt-[6px] w-full rounded-md bg-yellow-primary p-[8px_12px] text-sm font-bold uppercase text-white transition-colors hover:bg-yellow-dark">
                confirmar pedido
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
