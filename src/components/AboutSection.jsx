import { Link } from 'react-router-dom'
import frLogo from '../assets/fr_logo.jpg'

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={frLogo} 
              alt="Equipe da FR Desenvolvimento trabalhando" 
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-dark">Desenvolvido com 💜 pela FR Desenvolvimento</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A FR Desenvolvimento é especializada em criar soluções inovadoras que combinam 
              tecnologia de ponta com design intuitivo. Acreditamos que a tecnologia deve 
              servir às pessoas, não o contrário.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Desenvolvimento com foco no usuário</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Tecnologia de última geração</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700">Suporte e atualizações contínuas</span>
              </div>
            </div>
            
            <div className="pt-6">
              <Link to="/sobre" className="btn-primary inline-flex items-center">
                Conheça a FR Desenvolvimento
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
