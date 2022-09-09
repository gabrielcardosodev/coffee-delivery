import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

import { Coffee } from '../../@types/coffee'

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  return (
    <div className="relative flex h-[310px] w-64 flex-col items-center justify-center rounded-[6px_36px] bg-base-card p-5">
      <img className="absolute -top-5 " src={coffee.image} alt={coffee.name} />

      <div className="mt-16 flex gap-1">
        {coffee.categories.map((category) => (
          <span
            key={coffee.id}
            className="rounded-full bg-yellow-light p-2 text-xs font-bold uppercase text-yellow-dark"
          >
            {category}
          </span>
        ))}
      </div>

      <strong className="mt-4 font-baloo text-xl text-base-subtitle">
        {coffee.name}
      </strong>
      <p className="mt-2 text-center text-sm text-base-label">
        {coffee.description}
      </p>

      <form className="mt-9 flex w-full items-center justify-between">
        <p className="text-2xl font-bold text-base-text">
          <span className="text-sm font-normal leading-none">R$ </span>
          {coffee.price}
        </p>

        <div className="flex items-center gap-2">
          <div className="flex h-fit w-[72px] rounded-md bg-base-button p-2">
            <button className="text-purple-primary hover:text-purple-dark">
              <Minus weight="bold" size={14} />
            </button>

            <input
              className="w-full border-none bg-transparent text-center text-base-title outline-none"
              type="number"
              min={0}
            />

            <button className="text-purple-primary hover:text-purple-dark">
              <Plus weight="bold" size={14} />
            </button>
          </div>

          <button
            className="m-0 h-fit rounded-md bg-purple-dark p-2 transition-colors hover:bg-purple-primary"
            type="submit"
          >
            <ShoppingCartSimple weight="fill" color="white" size={22} />
          </button>
        </div>
      </form>
    </div>
  )
}