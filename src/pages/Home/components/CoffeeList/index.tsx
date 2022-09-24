import { coffees } from '../../../../@types/coffee'
import { CoffeeCard } from '../../../../components/CoffeeCard'

export function CoffeeList() {
  return (
    <div className="mt-14">
      <strong className="font-baloo text-[32px] text-base-subtitle">
        Nossos cafés
      </strong>

      <div className="my-14 flex flex-wrap gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  )
}
