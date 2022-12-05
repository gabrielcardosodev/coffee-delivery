import { Coffee } from "phosphor-react";

export function NoItems() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4 rounded-[6px_44px] bg-base-card">
      <p className="font-baloo text-lg text-base-title">
        Nenhum item adicionado ao carrinho
      </p>

      <Coffee weight="fill" size={40} className="text-yellow-dark" />
    </div>
  );
}
