import { Route, Routes } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { DefaultScreen } from './screens/default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/delivery" element={<Delivery />} /> */}
      </Route>
    </Routes>
  )
}
