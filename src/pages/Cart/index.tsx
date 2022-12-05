import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { CartForm } from "./components/CartForm";
import { CartItems } from "./components/CartItems";
import { NoItems } from "./components/NoItems";
import { SubmitDetails } from "./components/SubmitDetails";

export function Cart() {
  const { cart } = useContext(CoffeeContext);

  return (
    <div className="mx-0 mt-10 flex justify-between gap-8">
      <CartForm />

      <div className="w-[448px]">
        <strong className="font-baloo text-lg text-base-subtitle">
          Cafés selecionados
        </strong>

        <div className="my-4 rounded-[6px_44px] bg-base-card p-10">
          {cart && cart.length > 0 ? (
            cart.map((item) => {
              return <CartItems key={item.id} coffee={item} />;
            })
          ) : (
            <NoItems />
          )}

          {cart && cart.length > 0 && <SubmitDetails />}
        </div>
      </div>
    </div>
  );
}
