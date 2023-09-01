import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Post } from './pages/Post'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:id" element={<Post />} />
    </Route>
  </Routes>
)
