import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { cart } = useContext(CoffeeContext)
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-background-color py-8">
      <Link to={'/'}>
        <img src={logoImg} alt="" />
      </Link>

      <div className="flex gap-3">
        <span className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark">
          <MapPin className="text-purple-primary" size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <Link
          to={'/cart'}
          className="rounded-md bg-yellow-light p-2 transition-colors hover:bg-yellow-primary"
        >
          {cart && cart.length > 0 ? (
            <div className="relative">
              <ShoppingCart
                className="text-yellow-dark"
                size={22}
                weight="fill"
              />

              <span className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-xs font-bold text-base-card">
                {cart.length}
              </span>
            </div>
          ) : (
            <ShoppingCart
              className="text-yellow-dark"
              size={22}
              weight="fill"
            />
          )}
        </Link>
      </div>
    </header>
  )
}
