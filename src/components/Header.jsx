import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import LoginModal from './LoginModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user } = useAuth()

  const isActive = (path) => location.pathname === path

  const navigation = [
    { name: 'Início', path: '/' },
    { name: 'Funcionalidades', path: '/funcionalidades' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Planos', path: '/planos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4 overflow-visible">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-white text-lg"></i>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-dark whitespace-nowrap">
              Monique<span className="text-primary">Bot</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-300 font-medium text-sm xl:text-base whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {isAuthenticated ? (
              <Link
                to="/perfil"
                className="btn-primary hidden sm:inline-flex items-center text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
              >
                <i className="fas fa-user mr-2"></i>
                <span className="hidden lg:inline">{user?.name || 'Minha Conta'}</span>
                <span className="lg:hidden">Conta</span>
              </Link>
            ) : (
              <div className="relative overflow-visible">
                <button
                  onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
                  className="btn-primary hidden sm:inline-flex items-center text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  <span className="hidden lg:inline">Acesse sua conta</span>
                  <span className="lg:hidden">Entrar</span>
                </button>

                <LoginModal 
                  isOpen={isLoginModalOpen} 
                  onClose={() => setIsLoginModalOpen(false)} 
                  variant="dropdown"
                />
              </div>
            )}
            <Link
              to="/contato"
              className="btn-secondary hidden sm:inline-flex items-center text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
            >
              <span className="hidden lg:inline">Experimentar Agora</span>
              <span className="lg:hidden">Experimentar</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-dark text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-dark hover:text-primary hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <Link
                  to="/perfil"
                  className="btn-primary mt-4 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-user mr-2"></i>
                  Minha Conta
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsLoginModalOpen(true)
                  }}
                  className="btn-primary mt-4 w-full"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Acesse sua conta
                </button>
              )}
              <Link
                to="/contato"
                className="btn-secondary mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Experimentar Agora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
