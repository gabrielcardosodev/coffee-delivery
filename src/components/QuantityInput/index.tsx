import { Minus, Plus } from "phosphor-react";
import classNames from "classnames";

interface QuantityInputProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
  size: "large" | "small";
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size,
}: QuantityInputProps) {
  return (
    <div
      className={classNames("flex w-[72px] rounded-md bg-base-button p-2", {
        "h-[38]": size === "large",
        "mt-2 h-8": size === "small",
      })}
    >
      <button
        type="button"
        className="text-purple-primary hover:text-purple-dark disabled:opacity-40"
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        <Minus weight="bold" size={14} />
      </button>

      <span className="flex w-full items-center justify-center border-none bg-transparent text-center align-middle text-base-title outline-none">
        {quantity ?? 1}
      </span>

      <button
        type="button"
        className="text-purple-primary hover:text-purple-dark"
        onClick={onIncrease}
      >
        <Plus weight="bold" size={14} />
      </button>
    </div>
  );
}
