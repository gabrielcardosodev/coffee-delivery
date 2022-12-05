import { Trash } from "phosphor-react";
import React, { useContext, useState } from "react";

import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem, CoffeeContext } from "../../../../contexts/CoffeeContext";
import { currencyFormatted } from "../../../../utils/currencyFormatted";

interface CartItemsProps {
  coffee: CartItem;
}

export function CartItems({ coffee }: CartItemsProps) {
  const coffeePrice = coffee.price * coffee.quantity;

  const { removeCoffeeInCart, changeCartItemQuantity } =
    useContext(CoffeeContext);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemoveItemInCart() {
    removeCoffeeInCart(coffee.id);
  }

  return (
    <div className="flex flex-col">
      <div className="mt-4 rounded-[6px_44px] bg-base-card">
        <div className="flex flex-col gap-4">
          {coffee && (
            <>
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <img
                    className="h-16 w-16"
                    src={coffee.image}
                    alt={coffee.image}
                  />

                  <div className="flex flex-col">
                    <span className="text-base-subtitle">{coffee.name}</span>

                    <div className="flex gap-2">
                      <QuantityInput
                        size="small"
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                        quantity={coffee.quantity}
                      />

                      <button
                        onClick={handleRemoveItemInCart}
                        className="mt-2 flex h-8 items-center gap-2 rounded-md bg-base-button p-2 text-xs uppercase transition-colors hover:bg-base-hover"
                      >
                        <Trash className="text-purple-primary" size={16} />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>

                <span className="justify-start font-bold text-base-text">
                  R$ {currencyFormatted(coffeePrice)}
                </span>
              </div>

              <hr color="#E6E5E5" className="my-6 w-full" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
