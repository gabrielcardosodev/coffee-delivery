import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export function CartForm() {
  return (
    <form className="mt-10 flex gap-8" action="">
      <div className="flex flex-col">
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

          <div className="mt-11">
            <input
              type="text"
              className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
              placeholder="CEP"
            />

            <input
              type="text"
              className="w-full rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
              placeholder="CEP"
            />

            <div className="flex w-full gap-3">
              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="CEP"
              />

              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="CEP"
              />

              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="CEP"
              />
            </div>

            <div className="flex w-full gap-3">
              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="CEP"
              />

              <input
                type="text"
                className="rounded border border-base-button bg-base-input p-3 text-base-text outline-none transition-all placeholder:text-base-label focus:border-yellow-dark"
                placeholder="CEP"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-base-card p-10 text-base-subtitle">
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
            <button className="flex items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <CreditCard className="text-purple-primary" size={16} />
              Cartão de Crédito
            </button>

            <button className="flex items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <Bank className="text-purple-primary" size={16} />
              Cartão de Débito
            </button>

            <button className="flex items-center gap-3 rounded-md bg-base-button p-4 text-xs uppercase text-base-text transition-colors hover:bg-base-hover">
              <Money className="text-purple-primary" size={16} />
              Dinheiro
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <strong className="font-baloo text-lg text-base-subtitle">
          Cafés selecionados
        </strong>

        <div className="mt-4 rounded-[6px_44px] bg-base-card p-10">
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </form>
  )
}
