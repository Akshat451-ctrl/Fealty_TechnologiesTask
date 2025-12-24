import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Plans from './pages/Plans.jsx'
import Benefits from './pages/Benefits.jsx'
import Claims from './pages/Claims.jsx'
import Reviews from './pages/Reviews.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
