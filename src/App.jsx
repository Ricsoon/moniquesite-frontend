import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Funcionalidades from './pages/Funcionalidades'
import Planos from './pages/Planos'
import Blog from './pages/Blog'
import Politica from './pages/Politica'
import Termos from './pages/Termos'
import Perfil from './pages/Perfil'
import AuthCallback from './pages/AuthCallback'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
