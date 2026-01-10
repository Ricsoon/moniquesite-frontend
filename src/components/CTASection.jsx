import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-6">Pronto para Transformar sua Rotina?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Junte-se aos usuários que já descobriram o poder de ter uma assistente pessoal inteligente
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/planos" className="btn-accent">
            Conheça nossos planos
          </Link>
          <Link to="/contato" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition-all duration-300 font-semibold text-lg">
            <i className="fas fa-comment-dots mr-2"></i>
            Falar com Especialista
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
