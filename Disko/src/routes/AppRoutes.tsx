import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Discover from '../pages/Discover'
import Playlists from '../pages/Playlists'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="playlists" element={<Playlists />} />
      </Route>
    </Routes>
  )
}