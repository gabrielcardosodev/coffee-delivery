import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <header className="flex w-full items-center justify-between py-8">
      <img src={logoImg} alt="" />

      <div className="flex gap-3">
        <span className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark">
          <MapPin className="text-purple-primary" size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <Link
          to={'/cart'}
          className="rounded-md bg-yellow-light p-2 transition-colors hover:bg-yellow-primary"
        >
          <ShoppingCart className="text-yellow-dark" size={22} weight="fill" />
        </Link>
      </div>
    </header>
  )
}
