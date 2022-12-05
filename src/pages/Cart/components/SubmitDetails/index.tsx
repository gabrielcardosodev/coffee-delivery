import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { currencyFormatted } from "../../../../utils/currencyFormatted";

export function SubmitDetails() {
  const { purchaseTotal } = useContext(CoffeeContext);

  const totalOrder = purchaseTotal + 3.5;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-between text-sm text-base-text">
          <span>Total de itens</span>
          <span className="text-base">
            R$ {currencyFormatted(purchaseTotal)}
          </span>
        </div>

        <div className="flex w-full justify-between text-sm text-base-text">
          <span>Entrega</span>
          <span className="text-base">R$ 3,50</span>
        </div>

        <div className="flex w-full justify-between text-xl font-bold text-base-subtitle">
          <span>Total</span>
          <span>R$ {currencyFormatted(totalOrder)}</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-md bg-yellow-primary px-2 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-yellow-dark">
        confirmar pedido
      </button>
    </>
  );
}
