import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const adjectives = ['Pessoal', 'Funcional', 'Profissional', 'Personalizada', 'Personificada', 'Particular']
  const [currentAdjective, setCurrentAdjective] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const scrollToDemo = () => {
    const demoSection = document.querySelector('#interactive-demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120
    const pauseTime = 500

    const timeout = setTimeout(() => {
      if (!isDeleting && currentAdjective === adjectives[currentIndex]) {
        // Pausa curta antes de começar a deletar
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentAdjective === '') {
        // Move para o próximo adjetivo
        setCurrentIndex((prev) => (prev + 1) % adjectives.length)
        setIsDeleting(false)
      } else if (isDeleting) {
        // Deletando caracteres
        setCurrentAdjective(currentAdjective.slice(0, -1))
      } else {
        // Digitando caracteres
        setCurrentAdjective(adjectives[currentIndex].slice(0, currentAdjective.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentAdjective, currentIndex, isDeleting, adjectives])

  return (
    <section className="section-padding overflow-visible">
      <div className="container-custom overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight font-thunder">
              <div className="break-words">Sua Assistente</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary break-words">
                {currentAdjective}
                <span className="inline-block h-8 sm:h-10 md:h-12 bg-primary ml-1 animate-blink" style={{width: '5px'}}></span>
              </div>
              <div className="break-words">Inteligente</div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              MoniqueBot é mais do que uma assistente virtual. É sua companheira inteligente que aprende com você, 
              entende suas necessidades e te ajuda a ser mais produtivo no dia a dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="btn-primary inline-flex items-center">
                Começar a Usar
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <button onClick={scrollToDemo} className="btn-secondary inline-flex items-center">
                <i className="fas fa-play-circle mr-2"></i>
                Ver Demonstração
              </button>
            </div>
          </div>
          
          <div className="relative overflow-visible">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-8 sm:transform sm:rotate-3">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-robot text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">MoniqueBot</h3>
                    <p className="text-sm text-gray-500">Online - Pronta para ajudar</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4 max-w-xs">
                    <p className="text-gray-700">Olá! Como posso te ajudar hoje? Posso agendar compromissos, responder perguntas ou ajudar com tarefas!</p>
                  </div>
                  <div className="bg-primary rounded-2xl p-4 max-w-xs ml-auto">
                    <p className="text-white">Preciso de ajuda para organizar minha semana</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex space-x-2">
                    <input type="text" placeholder="Digite sua mensagem..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <button className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-500 transition-colors">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
