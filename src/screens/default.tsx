import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export function DefaultScreen() {
  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col px-3 xl:px-0">
      <Header />
      <Outlet />
    </div>
  )
}
