import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeCupImg from '../../../assets/coffee_cup.png'

export function Intro() {
  return (
    <div className="mt-24 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="w-[588px]">
          <h1 className="w-full font-baloo text-5xl font-extrabold text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4 text-xl text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="mt-[65px] flex flex-wrap text-base">
          <span className="mr-10 mt-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark">
              <ShoppingCart className="text-background-color" weight="fill" />
            </span>
            Compra simples e segura
          </span>

          <span className="mr-10 mt-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-base-text">
              <Package className="text-background-color" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </span>

          <span className="mr-10 mt-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-primary">
              <Timer className="text-background-color" weight="fill" />
            </span>
            Compra simples e segura
          </span>

          <span className="mr-10 mt-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-primary">
              <Coffee className="text-background-color" weight="fill" />
            </span>
            Compra simples e segura
          </span>
        </div>
      </div>

      <img src={coffeeCupImg} alt="" />
    </div>
  )
}
