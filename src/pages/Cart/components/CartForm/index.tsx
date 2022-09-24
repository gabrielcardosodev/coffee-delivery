import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CartItems } from '../CartItems'

export function CartForm() {
  return (
    <form className="mt-10 flex gap-8" action="">
      <div className="flex w-full max-w-[640px] flex-col">
        <strong className="font-baloo text-lg text-base-subtitle">
          Complete seu pedido
        </strong>

        <div className="mt-4 rounded-md bg-base-card p-10 text-base-subtitle">
          <div className="flex gap-2">
            <MapPinLine className="text-yellow-dark" size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <p className="text-sm text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>

          <div className="mt-11 flex flex-col gap-4">
            <input
              type="text"
              className="w-[200px] rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
              placeholder="CEP"
            />

            <input
              type="text"
              className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
              placeholder="Rua"
            />

            <div className="flex w-full gap-3">
              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="Número"
              />

              <input
                type="text"
                className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="Complemento"
              />
            </div>

            <div className="flex w-full gap-3">
              <input
                type="text"
                className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="Bairro"
              />

              <input
                type="text"
                className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="Cidade"
              />

              <input
                type="text"
                className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="UF"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 rounded-md bg-base-card p-10 text-base-subtitle">
          <div className="flex gap-2">
            <CurrencyDollar className="text-purple-primary" size={22} />

            <div>
              <span>Pagamento</span>
              <p className="text-sm text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </div>

          <div className="mt-8 flex w-full gap-3">
            <button className="flex w-full items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <CreditCard className="text-purple-primary" size={16} />
              Cartão de Crédito
            </button>

            <button className="flex w-full items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <Bank className="text-purple-primary" size={16} />
              Cartão de Débito
            </button>

            <button className="flex w-full items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <Money className="text-purple-primary" size={16} />
              Dinheiro
            </button>
          </div>
        </div>
      </div>

      <CartItems />
    </form>
  )
}
