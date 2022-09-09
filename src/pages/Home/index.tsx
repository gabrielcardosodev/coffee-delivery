import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <main className="w-full">
      <Intro />
      <CoffeeList />
    </main>
  )
}
