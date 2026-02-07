import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <span className="text-xl font-semibold">
                Monique<span className="text-primary">Bot</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('Sua assistente pessoal inteligente, desenvolvida com tecnologia de ponta pela FR Desenvolvimento para tornar sua vida mais organizada e produtiva.')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('Recursos')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/funcionalidades" className="hover:text-white transition-colors duration-300">{t('Funcionalidades')}</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors duration-300">{t('Blog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('Empresa')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/sobre" className="hover:text-white transition-colors duration-300">{t('Sobre Nós')}</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors duration-300">{t('Contato')}</Link></li>
              <li><Link to="/planos" className="hover:text-white transition-colors duration-300">{t('Planos')}</Link></li>
              <li><Link to="/politica" className="hover:text-white transition-colors duration-300">{t('Privacidade')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            {t('© 2026 MoniqueBot - Desenvolvido por FR Tecnologia e Desenvolvimento de Software LTDA')}
          </p>
          <div className="flex space-x-6 text-gray-400">
            <Link 
              to="/termos" 
              className="hover:text-white transition-colors duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t('Termos de Uso')}
            </Link>
            <Link 
              to="/politica" 
              className="hover:text-white transition-colors duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t('Política de Privacidade')}
            </Link>
            <a href="#" className="hover:text-white transition-colors duration-300">{t('Cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
