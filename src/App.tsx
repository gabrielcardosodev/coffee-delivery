import { BrowserRouter } from 'react-router-dom'

import { CoffeeProvider } from './contexts/CoffeeContext'
import { Router } from './Router'

export function App() {
  return (
    <CoffeeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CoffeeProvider>
  )
}
