import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Layout } from './components/Layout'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
)
