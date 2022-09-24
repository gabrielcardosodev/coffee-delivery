import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  handleIncreaseQuantityByOne: () => void
  handleDecreaseQuantityByOne: () => void
  quantity: number
}

export function QuantityInput({
  handleDecreaseQuantityByOne,
  handleIncreaseQuantityByOne,
  quantity,
}: QuantityInputProps) {
  return (
    <div className="flex h-fit w-[72px] rounded-md bg-base-button p-2">
      <button
        type="button"
        className="text-purple-primary hover:text-purple-dark"
        onClick={handleDecreaseQuantityByOne}
      >
        <Minus weight="bold" size={14} />
      </button>

      <span className="w-full border-none bg-transparent text-center text-base-title outline-none">
        {quantity ?? 0}
      </span>

      <button
        type="button"
        className="text-purple-primary hover:text-purple-dark"
        onClick={handleIncreaseQuantityByOne}
      >
        <Plus weight="bold" size={14} />
      </button>
    </div>
  )
}
