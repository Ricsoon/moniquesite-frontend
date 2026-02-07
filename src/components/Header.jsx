import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import LoginModal from './LoginModal'
import { useTranslation } from 'react-i18next'
import moniqueAiIcon from '../assets/monique_ai.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user } = useAuth()
  const { t, i18n } = useTranslation()

  const isActive = (path) => location.pathname === path

  const navigation = [
    { name: t('Início'), path: '/' },
    { name: t('Funcionalidades'), path: '/funcionalidades' },
    { name: t('Sobre'), path: '/sobre' },
    { name: t('Planos'), path: '/planos' },
    { name: t('Blog'), path: '/blog' },
    { name: t('Contato'), path: '/contato' }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4 overflow-visible">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
              <img src={moniqueAiIcon} alt="MoniqueBot" className="w-8 h-8 rounded-full object-cover" />
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
            {/* Language Selector */}
            <div className="flex items-center gap-1 mr-4">
              <button
                onClick={() => changeLanguage('pt-BR')}
                className={`w-8 h-6 rounded-sm overflow-hidden border-2 ${i18n.language === 'pt-BR' ? 'border-primary' : 'border-gray-300'} hover:border-primary transition-colors`}
                title="Português (Brasil)"
              >
                <img src="https://flagcdn.com/w40/br.png" alt="BR" className="w-full h-full object-cover" />
              </button>
              <button
                onClick={() => changeLanguage('en-US')}
                className={`w-8 h-6 rounded-sm overflow-hidden border-2 ${i18n.language === 'en-US' ? 'border-primary' : 'border-gray-300'} hover:border-primary transition-colors`}
                title="English (US)"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-full h-full object-cover" />
              </button>
            </div>
            {isAuthenticated ? (
              <Link
                to="/perfil"
                className="btn-primary hidden sm:inline-flex items-center text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
              >
                <i className="fas fa-user mr-2"></i>
                <span className="hidden lg:inline">{t('Minha Conta')}</span>
                <span className="lg:hidden">{t('Conta')}</span>
              </Link>
            ) : (
              <div className="relative overflow-visible">
                <button
                  onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
                  className="btn-primary hidden sm:inline-flex items-center text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-4"
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  <span className="hidden lg:inline">{t('Acesse sua conta')}</span>
                  <span className="lg:hidden">{t('Entrar')}</span>
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
              <span className="hidden lg:inline">{t('Experimentar Agora')}</span>
              <span className="lg:hidden">{t('Experimentar')}</span>
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
                  {t('Minha Conta')}
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
                  {t('Acesse sua conta')}
                </button>
              )}
              <Link
                to="/contato"
                className="btn-secondary mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('Experimentar Agora')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
